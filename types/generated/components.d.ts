import type { Schema, Struct } from '@strapi/strapi';

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    description: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    og_image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Schemas: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.seo': CommonSeo;
    }
  }
}
