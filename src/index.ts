import type { Core } from "@strapi/strapi";

const PUBLIC_READ = ["find", "findOne"];
const COLLECTIONS = ["product", "category", "blog-post", "coupon"];

// Open read access on the public role so a token-less setup works out of the box.
async function grantPublicRead(strapi: Core.Strapi) {
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
}

// Seed a little sample content on first run so the storefront has data to show.
async function seed(strapi: Core.Strapi) {
  const count = await strapi.documents("api::product.product").count({});
  if (count > 0) return;

  const publish = { status: "published" as const };

  const livingRoom = await strapi.documents("api::category.category").create({
    data: { name: "Living Room", slug: "living-room", description: "Sofas, chairs and coffee tables" },
    ...publish,
  });
  const bedroom = await strapi.documents("api::category.category").create({
    data: { name: "Bedroom", slug: "bedroom", description: "Beds, nightstands and dressers" },
    ...publish,
  });

  await strapi.documents("api::product.product").create({
    data: {
      name: "Aria Sofa",
      slug: "aria-sofa",
      description: "A timeless three-seater sofa in premium fabric.",
      price: 1299,
      comparePrice: 1599,
      category: livingRoom.documentId,
      tags: ["sofa", "fabric"],
      variants: [
        { name: "Color", value: "Beige", stock: 8 },
        { name: "Color", value: "Charcoal", stock: 5 },
      ],
      stock: 13,
      isFeatured: true,
      isBestseller: true,
      rating: 4.8,
      reviewCount: 124,
    },
    ...publish,
  });

  await strapi.documents("api::product.product").create({
    data: {
      name: "Haven Bed Frame",
      slug: "haven-bed-frame",
      description: "Solid oak bed frame with a low headboard.",
      price: 899,
      category: bedroom.documentId,
      tags: ["bed", "oak"],
      variants: [{ name: "Size", value: "Queen", stock: 6 }],
      stock: 6,
      isFeatured: true,
      rating: 4.6,
      reviewCount: 58,
    },
    ...publish,
  });

  await strapi.documents("api::coupon.coupon").create({
    data: { code: "SAVE10", discountType: "percent", value: 10, minOrder: 0 },
  });
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await grantPublicRead(strapi);
    await seed(strapi);
  },
};
