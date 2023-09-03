import { defineType } from 'sanity';

export default defineType({
  name: 'showcase',
  title: 'Showcase',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the service. (48 character limit)',
      validation: (Rule) => Rule.required().max(48),
    },
    {
      name: 'media',
      title: 'Media',
      type: 'object',
      description: 'This image should be visible on a light background',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
    },
    {
      name: 'media_alt',
      title: 'Media alternative',
      type: 'object',
      description: 'This image should be visible on a dark background',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description:
        'A short description of the service, to be displayed on the home page. (95 character limit)',
      validation: (Rule) => Rule.required().max(95),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A description of the service. (640 character limit)',
      validation: (Rule) => Rule.required().max(640),
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'media.image',
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
