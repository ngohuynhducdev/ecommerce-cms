import type { Schema, Struct } from '@strapi/strapi';

export interface ProductVariant extends Struct.ComponentSchema {
  collectionName: 'components_product_variants';
  info: {
    description: 'A product option such as a color or size';
    displayName: 'Variant';
  };
  attributes: {
    name: Schema.Attribute.String;
    priceModifier: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    stock: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.variant': ProductVariant;
    }
  }
}
