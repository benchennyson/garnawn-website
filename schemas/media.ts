import { defineType } from 'sanity';

export default defineType({
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
});
