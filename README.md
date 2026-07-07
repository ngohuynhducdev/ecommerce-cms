# 3legant CMS

Headless [Strapi v5](https://strapi.io) backend for the **3legant furniture
storefront**. Defines the content model and exposes it over Strapi's REST API.

> Frontend: [`ecommerce`](https://github.com/ngohuynhducdev/ecommerce) —
> a Next.js 16 storefront that reads from this CMS **or** from built-in mock
> data, toggled by an env flag. The live demo runs on mock data, so this CMS
> is optional.

## Content types

| Type | Key fields |
|---|---|
| **Product** | name, slug, price, comparePrice, images, category (relation), tags, variants, stock, isFeatured, isBestseller, rating, reviewCount |
| **Category** | name, slug, description, image, products (relation) |
| **Blog Post** | title, slug, excerpt, author, cover, tags, content (rich text) |
| **Coupon** | code, discountType (percent/fixed), value, minOrder, expiresAt |

Field names and shapes match what the frontend's Strapi mappers
(`src/lib/api/*`) expect, so switching the frontend from mock to CMS needs
zero UI changes.

## Run locally

```bash
yarn install
yarn develop        # admin at http://localhost:1337/admin
```

Point the frontend at it:

```bash
# frontend .env.local
NEXT_PUBLIC_USE_STRAPI=true
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=<full-access token from Settings → API Tokens>
```

On first run the app seeds sample content (products, categories, blog
posts, coupons) and opens public read access — the storefront works
immediately.

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
4. Open the deployed `/admin`, create an admin user, then a full-access
   **API token** (Settings → API Tokens).
5. Point the frontend at it (on Vercel): `NEXT_PUBLIC_USE_STRAPI=true`,
   `NEXT_PUBLIC_STRAPI_URL=<render-url>`, `STRAPI_API_TOKEN=<token>`.

> Render's free tier sleeps after inactivity (~50s cold start), so the
> main storefront demo runs on mock data instead.

## Notes

- **Publish entries** — content types use draft & publish; the REST API
  returns only published entries, so publish products/posts after creating them.
- **API access** — the frontend authenticates with a full-access API token
  (Settings → API Tokens). Public read permissions also work for a token-less
  setup.

## Tech

Strapi v5 · TypeScript · SQLite (dev) / PostgreSQL (prod) · Cloudinary
