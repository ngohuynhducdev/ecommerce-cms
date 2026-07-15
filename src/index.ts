import type { Core } from "@strapi/strapi";

const PUBLIC_READ = ["find", "findOne"];
// Coupons are deliberately excluded: their codes must stay unguessable, so
// they are only readable with an API token.
const COLLECTIONS = ["product", "category", "blog-post"];

// Open read access on the public role so a token-less setup works out of the box.
// Runs once (tracked in the core store) so permission changes made in the
// admin afterwards are not overridden on every boot.
async function grantPublicRead(strapi: Core.Strapi) {
  const store = strapi.store({ type: "core", name: "ecommerce-cms" });
  if (await store.get({ key: "publicReadGranted" })) return;

  const publicRole = await strapi
    .query("plugin::users-permissions.role")
    .findOne({ where: { type: "public" } });
  if (!publicRole) return;

  for (const ct of COLLECTIONS) {
    for (const action of PUBLIC_READ) {
      const uid = `api::${ct}.${ct}.${action}`;
      const existing = await strapi
        .query("plugin::users-permissions.permission")
        .findOne({ where: { action: uid, role: publicRole.id } });
      if (!existing) {
        await strapi
          .query("plugin::users-permissions.permission")
          .create({ data: { action: uid, role: publicRole.id } });
      }
    }
  }

  await store.set({ key: "publicReadGranted", value: true });
}

// Earlier versions of this bootstrap granted public read on coupons, which
// made every discount code enumerable without a token. Revoke on every boot
// so existing databases are cleaned up too.
async function revokePublicCouponRead(strapi: Core.Strapi) {
  const publicRole = await strapi
    .query("plugin::users-permissions.role")
    .findOne({ where: { type: "public" } });
  if (!publicRole) return;

  for (const action of PUBLIC_READ) {
    await strapi.query("plugin::users-permissions.permission").deleteMany({
      where: { action: `api::coupon.coupon.${action}`, role: publicRole.id },
    });
  }
}

const publish = { status: "published" as const };

// A rich-text paragraph/heading block (Strapi "blocks" format).
const h2 = (text: string) => ({ type: "heading", level: 2, children: [{ type: "text", text }] });
const p = (text: string) => ({ type: "paragraph", children: [{ type: "text", text }] });

// Seed sample content on first run so the storefront has data to show.
// Images are added later via the admin (uploads persist on Cloudinary in prod).
async function seed(strapi: Core.Strapi) {
  const count = await strapi.documents("api::product.product").count({});
  if (count > 0) return;

  const cats: Record<string, { documentId: string }> = {};
  for (const [slug, name, description] of [
    ["living-room", "Living Room", "Sofas, chairs and coffee tables"],
    ["bedroom", "Bedroom", "Beds, nightstands and dressers"],
    ["dining", "Dining", "Dining tables and chairs"],
    ["office", "Office", "Desks, stools and storage"],
  ]) {
    cats[slug] = await strapi.documents("api::category.category").create({
      data: { name, slug, description },
      ...publish,
    });
  }

  const products = [
    {
      name: "Aria Sofa", slug: "aria-sofa", category: "living-room",
      description: "A timeless three-seater sofa upholstered in premium fabric.",
      price: 1299, comparePrice: 1599, tags: ["sofa", "fabric"],
      variants: [
        { name: "Color", value: "Beige", stock: 8 },
        { name: "Color", value: "Charcoal", stock: 5 },
        { name: "Color", value: "Sage Green", stock: 3 },
      ],
      stock: 16, isFeatured: true, isBestseller: true, rating: 4.8, reviewCount: 124,
    },
    {
      name: "Nordic Coffee Table", slug: "nordic-coffee-table", category: "living-room",
      description: "Solid walnut coffee table with a minimalist Scandinavian silhouette.",
      price: 349, tags: ["table", "walnut"],
      variants: [{ name: "Color", value: "Natural Walnut", stock: 10 }],
      stock: 10, isFeatured: true, rating: 4.6, reviewCount: 87,
    },
    {
      name: "Lounge Armchair", slug: "lounge-armchair", category: "living-room",
      description: "A sculptural accent armchair with tapered legs.",
      price: 499, comparePrice: 649, tags: ["chair", "accent"],
      variants: [
        { name: "Color", value: "Mustard", stock: 6 },
        { name: "Color", value: "Slate", stock: 4 },
      ],
      stock: 10, isBestseller: true, rating: 4.7, reviewCount: 63,
    },
    {
      name: "Haven Bed Frame", slug: "haven-bed-frame", category: "bedroom",
      description: "Solid oak bed frame with a low, upholstered headboard.",
      price: 899, tags: ["bed", "oak"],
      variants: [
        { name: "Size", value: "Queen", stock: 6 },
        { name: "Size", value: "King", stock: 4 },
      ],
      stock: 10, isFeatured: true, rating: 4.6, reviewCount: 58,
    },
    {
      name: "Drift Nightstand", slug: "drift-nightstand", category: "bedroom",
      description: "Compact two-drawer nightstand with soft-close runners.",
      price: 249, tags: ["storage", "oak"],
      variants: [{ name: "Color", value: "Oak", stock: 12 }],
      stock: 12, rating: 4.5, reviewCount: 41,
    },
    {
      name: "Ensemble Dining Table", slug: "ensemble-dining-table", category: "dining",
      description: "Extendable dining table that seats six to eight.",
      price: 799, comparePrice: 999, tags: ["table", "dining"],
      variants: [{ name: "Finish", value: "Oak", stock: 5 }],
      stock: 5, isFeatured: true, rating: 4.8, reviewCount: 72,
    },
    {
      name: "Contour Dining Chair", slug: "contour-dining-chair", category: "dining",
      description: "Moulded dining chair with a solid ash base.",
      price: 149, tags: ["chair", "dining"],
      variants: [
        { name: "Color", value: "White", stock: 20 },
        { name: "Color", value: "Black", stock: 18 },
      ],
      stock: 38, isBestseller: true, rating: 4.4, reviewCount: 96,
    },
    {
      name: "Mason Bar Stool", slug: "mason-bar-stool", category: "office",
      description: "Height-adjustable bar stool with a footrest.",
      price: 89, tags: ["stool", "office"],
      variants: [{ name: "Color", value: "Black", stock: 25 }],
      stock: 25, rating: 4.3, reviewCount: 34,
    },
  ];

  for (const prod of products) {
    const { category, ...rest } = prod;
    await strapi.documents("api::product.product").create({
      data: { ...rest, category: cats[category].documentId },
      ...publish,
    });
  }

  const posts = [
    {
      title: "How to Choose the Perfect Sofa for Your Living Room",
      slug: "how-to-choose-the-perfect-sofa",
      excerpt: "From size and shape to fabric and color — everything you need to know before buying.",
      author: "Emma Carter", tags: ["Furniture Guide"],
      content: [
        h2("Understanding Your Space"),
        p("Measure your room carefully and leave at least 18 inches of walkway around the sofa so the space doesn't feel cramped."),
        h2("Fabric and Material"),
        p("Leather ages beautifully but feels cold in winter; performance fabrics are ideal for families with a Martindale rub count above 20,000."),
      ],
    },
    {
      title: "Minimalist Interior Design Principles",
      slug: "minimalist-interior-design-principles",
      excerpt: "Less is more — the core principles for a calm, clutter-free home.",
      author: "James Lee", tags: ["Interior Design"],
      content: [
        h2("The Core Principle: Less Is More"),
        p("Every object in a minimalist space earns its place. Be intentional about what you bring into your home and why."),
        h2("Color Palette"),
        p("Rely on two or three neutrals with a single accent, and introduce interest through texture rather than color."),
      ],
    },
    {
      title: "The Art of Mixing Furniture Styles",
      slug: "art-of-mixing-furniture-styles",
      excerpt: "Blend eras, materials and shapes into a space that feels uniquely yours.",
      author: "Sophia Martin", tags: ["Style Tips"],
      content: [
        h2("Start With a Foundation"),
        p("Begin with one anchor piece that defines the room's direction, then layer other styles around it."),
        h2("Balance Visual Weight"),
        p("Pair substantial, heavy-looking pieces with lighter ones so no single corner of the room feels overloaded."),
      ],
    },
  ];

  for (const post of posts) {
    // content uses Strapi's "blocks" shape; cast to satisfy the generated type
    await strapi.documents("api::blog-post.blog-post").create({ data: post as never, ...publish });
  }

  for (const [code, value] of [["SAVE10", 10], ["FURNITURE20", 20]] as const) {
    await strapi.documents("api::coupon.coupon").create({
      data: { code, discountType: "percent", value, minOrder: 0 },
    });
  }
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await revokePublicCouponRead(strapi);
    await grantPublicRead(strapi);
    await seed(strapi);
  },
};
