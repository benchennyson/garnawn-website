import { defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  type: 'document',
  title: 'Home page',
  fields: [
    {
      name: 'banner',
      type: 'banner',
      title: 'Banner',
    },
    {
      name: 'showcaseSection',
      type: 'object',
      title: 'Showcase section',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
        },
        {
          name: 'showcases',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'showcase' } }],
        },
      ],
    },
    {
      name: 'blogsSection',
      type: 'object',
      title: 'Blogs section',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
        },
        {
          name: 'blogs',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'blog' } }],
        },
      ],
    },
    {
      name: 'testimonialsSection',
      type: 'object',
      title: 'Testimonials section',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
        },
        {
          name: 'testimonials',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'testimonial' } }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'banner.title',
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
