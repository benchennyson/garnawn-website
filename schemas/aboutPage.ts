import { defineType } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'About page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the page. (64 character limit)',
      validation: (Rule) => Rule.required().max(64),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'The subtitle of the page. (128 character limit)',
      validation: (Rule) => Rule.required().max(128),
    },
    {
      name: 'media',
      title: 'Media',
      type: 'object',
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
      name: 'captions',
      type: 'array',
      title: 'Captions',
      of: [{ type: 'reference', to: { type: 'titledCaption' } }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
