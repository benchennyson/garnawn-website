import { defineType } from 'sanity';

export default defineType({
  name: 'contactPage',
  type: 'document',
  title: 'Contact page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the page. (64 character limit)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
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
  ],
});
