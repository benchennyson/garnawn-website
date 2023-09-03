import { defineType } from 'sanity';

export default defineType({
  name: 'servicesPage',
  type: 'document',
  title: 'Services page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the page. (64 character limit)',
      validation: (Rule) => Rule.required().max(64),
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
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
      name: 'showcases',
      type: 'array',
      title: 'Showcases',
      of: [{ type: 'reference', to: { type: 'showcase' } }],
    },
  ],
});
