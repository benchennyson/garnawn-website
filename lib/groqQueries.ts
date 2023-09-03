import { groq } from 'next-sanity';

export const getHomePage = groq`*[_type == 'homePage']{
    ...,
    showcaseSection
    { title,
      subtitle,
      showcases[]->
    },
    blogsSection
    {
      title,
      subtitle,
      blogs[]->
    },
    testimonialsSection
    {
      title,
      subtitle,
      testimonials[]->
    }
  }
`;

export const getAboutPage = groq`
*[_type == 'aboutPage'][0] {
  title,
  subtitle,
  media{
    image{
      asset->{
        _id,
        url
      }
    },
    alt
  },
  captions[]->
}
`;

export const getBlogsPage = groq`
*[_type == 'blogsPage'][0] {
    title,
    subtitle,
    media{
      image{
        asset->{
          _id,
          url
        }
      },
      alt
    },
    blogs[]->
  }
`;

export const getAllBlogs = groq`
*[_type == 'blog'] {
    slug,
    _updatedAt,
}
`;

export const getBlogBySlug = groq`
*[_type == 'blog' && slug.current == $slug][0] {
    title,
    subtitle,
    date,
    body,
    slug,
    media {
        image {
            asset->{
                _id,
                url
            }
        },
    alt
    },
    _updatedAt,
}
`;

export const getContactPage = groq`
*[_type == 'contactPage'][0] {
  title,
  subtitle,
  media{
    image{
      asset->{
        _id,
        url
      }
    },
    alt
  },
}
`;

export const getServicesPage = groq`
*[_type == 'servicesPage'][0] {
  title,
  subtitle,
  media{
    image{
      asset->{
        _id,
        url
      }
    },
    alt
  },
  showcases[]->
}
`;
