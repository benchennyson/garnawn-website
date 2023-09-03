import { defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: '(64 character limit)',
      validation: (Rule) => Rule.required().max(64),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'This could be a job title or a short description of the person. (64 character limit)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'media',
      title: 'Media',
      type: 'media',
      description: 'This is an optional image of the customers face',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      description: '(256 character limit)',
      validation: (Rule) => Rule.required().max(256),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
  },
});
