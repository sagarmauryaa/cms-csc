import type { Schema, Struct } from '@strapi/strapi';

export interface CommonAboutContent extends Struct.ComponentSchema {
  collectionName: 'components_common_about_contents';
  info: {
    displayName: 'AboutContent';
  };
  attributes: {
    Content: Schema.Attribute.Text;
    Description: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
    ViewMode: Schema.Attribute.Enumeration<['Horizontal', 'Vertical']>;
  };
}

export interface CommonContactDetail extends Struct.ComponentSchema {
  collectionName: 'components_common_contact_details';
  info: {
    displayName: 'Contact Detail';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.String;
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    mobile: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

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

export interface CommonTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_common_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Location: Schema.Attribute.String;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Thoughts: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_infos';
  info: {
    displayName: 'ContactInfo';
  };
  attributes: {
    Info: Schema.Attribute.Component<'common.contact-detail', true>;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EventEventCard extends Struct.ComponentSchema {
  collectionName: 'components_event_event_cards';
  info: {
    displayName: 'EventCard';
  };
  attributes: {
    Date: Schema.Attribute.Date;
    Gallery: Schema.Attribute.Media<'images' | 'files', true>;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    ShortDescription: Schema.Attribute.Text;
    Thumbnail: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
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
      'common.about-content': CommonAboutContent;
      'common.contact-detail': CommonContactDetail;
      'common.docs': CommonDocs;
      'common.documents': CommonDocuments;
      'common.seo': CommonSeo;
      'common.testimonial': CommonTestimonial;
      'contact.contact-info': ContactContactInfo;
      'event.event-card': EventEventCard;
      'member.faculty': MemberFaculty;
    }
  }
}
