import { defineType } from 'sanity';

export default defineType({
  name: 'titledCaption',
  title: 'Titled caption',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: '(64 character limit)',
      validation: (Rule) => Rule.required().max(64),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: '(256 character limit)',
      validation: (Rule) => Rule.required().max(256),
    },
  ],
});
