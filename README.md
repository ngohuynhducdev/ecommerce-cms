# 3legant CMS

[![CI](https://github.com/ngohuynhducdev/ecommerce-cms/actions/workflows/ci.yml/badge.svg)](https://github.com/ngohuynhducdev/ecommerce-cms/actions/workflows/ci.yml)

Headless [Strapi v5](https://strapi.io) backend for the **3legant furniture
storefront**. Defines the content model and exposes it over Strapi's REST API.

> Frontend: [`ecommerce`](https://github.com/ngohuynhducdev/ecommerce) —
> a Next.js 16 storefront that reads from this CMS **or** from built-in mock
> data, toggled by an env flag. **The live demo
> ([ecommerce-dexr.vercel.app](https://ecommerce-dexr.vercel.app)) runs
> against this CMS**: products from Postgres, media from Cloudinary. The mock
> path stays in the frontend so it can also run with no backend at all.

## Content types

| Type | Key fields |
|---|---|
| **Product** | name, slug, description, price, comparePrice, images, category (relation), tags, variants, stock, isFeatured, isBestseller, rating, reviewCount |
| **Category** | name, slug, description, image, products (relation), parent/children (self-relation, for sub-categories) |
| **Blog Post** | title, slug, excerpt, author, cover, tags, content (rich text) |
| **Coupon** | code, discountType (percent/fixed), value, minOrder, expiresAt |

Field names and shapes match what the frontend's Strapi mappers
(`ecommerce/src/lib/api/*`, in the storefront repo) expect, so switching the
frontend from mock to CMS needs zero UI changes.

## Run locally

Needs Node 20–24 (see `engines` in `package.json`; CI builds on Node 20).

```bash
yarn install
cp .env.example .env   # then fill in the secrets
yarn develop           # admin at http://localhost:1337/admin
```

Strapi will not boot until the secrets block in `.env` has real values —
generate each with `openssl rand -base64 32`. The database block can stay
commented out: dev defaults to SQLite in `.tmp/data.db`.

Point the frontend at it:

```bash
# frontend .env.local
NEXT_PUBLIC_USE_STRAPI=true
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=<read-only token from Settings → API Tokens>
```

On first boot the app seeds sample content (products, categories, blog posts,
coupons), backfills any missing images from Unsplash through the upload plugin
(Cloudinary in production, local disk in dev), and opens public read access on
everything **except** coupons — those need a token so discount codes stay
unguessable.

Each step guards itself, so admin edits survive a restart:

- **Seeding** is skipped as soon as the database holds at least one product.
  Delete every product and the next boot seeds the sample set again.
- **Media backfill** and the **public-read grant** are flagged in the core
  store and run once. (The backfill only sets its flag once every entry has an
  image, so a failed download is retried on the next boot.)
- **Public read on coupons** is the deliberate exception: it is revoked on
  **every** boot, so a token stays mandatory for discount codes even if the
  permission is granted by hand.

## Deploy (free tier)

Strapi needs a persistent server, a database, and durable file storage.
A free-tier setup:

| Piece | Service |
|---|---|
| App | [Render](https://render.com) web service |
| Database | [Neon](https://neon.tech) (serverless Postgres) |
| Media | [Cloudinary](https://cloudinary.com) |

1. **Neon** → create a database, copy its connection string.
2. **Cloudinary** → grab the cloud name / API key / API secret.
3. **Render** → New Web Service from this repo:
   - Build: `yarn install && yarn build` · Start: `yarn start`
   - Env vars: the secrets from `.env.example` (generate with
     `openssl rand -base64 32`), plus
     `DATABASE_CLIENT=postgres`, `DATABASE_URL=<neon>`,
     `DATABASE_SSL=true`, and the three `CLOUDINARY_*` values.
4. Open the deployed `/admin`, create an admin user, then a **read-only
   API token** (Settings → API Tokens) — the storefront only reads.
5. Point the frontend at it (on Vercel): `NEXT_PUBLIC_USE_STRAPI=true`,
   `NEXT_PUBLIC_STRAPI_URL=<render-url>`, `STRAPI_API_TOKEN=<token>`.

> Render's free tier sleeps after inactivity — a cold start takes roughly
> 80 seconds. The storefront hides this by rendering pages through ISR
> (`revalidate = 3600`) and falling back to mock data if a request fails, so
> visitors never wait on a sleeping backend.

## Notes

- **Publish entries** — Product, Category and Blog Post use draft & publish,
  and the REST API returns only published entries, so publish them after
  creating. Coupons have draft & publish disabled and are live immediately.
- **API access** — the frontend authenticates with a read-only API token
  (Settings → API Tokens). Public read permissions also work for a token-less
  setup, except coupons, which always require a token. The storefront calls
  Strapi server-side only, so the token never reaches the browser.
- **CORS** — browser origins are limited to `CORS_ORIGINS`
  (default `http://localhost:3000`); server-side callers are unaffected.
- **CSP** — the security middleware whitelists `res.cloudinary.com` for
  images and media so Cloudinary-hosted uploads render in the admin panel.

## Tech

Strapi v5.50 · TypeScript · SQLite (dev) / PostgreSQL (prod) · Cloudinary ·
GitHub Actions CI (admin panel + TypeScript build on every PR)
