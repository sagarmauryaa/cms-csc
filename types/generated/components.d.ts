import type { Schema, Struct } from '@strapi/strapi';

export interface CommonDocs extends Struct.ComponentSchema {
  collectionName: 'components_common_docs';
  info: {
    displayName: 'Docs';
  };
  attributes: {
    Desc: Schema.Attribute.String;
    Document: Schema.Attribute.Component<'common.documents', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CommonDocuments extends Struct.ComponentSchema {
  collectionName: 'components_common_documents';
  info: {
    displayName: 'Documents';
  };
  attributes: {
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    PDFFile: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
  };
}

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

export interface MemberFaculty extends Struct.ComponentSchema {
  collectionName: 'components_member_faculties';
  info: {
    displayName: 'Faculty';
  };
  attributes: {
    Description: Schema.Attribute.String;
    faculties: Schema.Attribute.Relation<'oneToMany', 'api::faculty.faculty'>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.docs': CommonDocs;
      'common.documents': CommonDocuments;
      'common.seo': CommonSeo;
      'member.faculty': MemberFaculty;
    }
  }
}
