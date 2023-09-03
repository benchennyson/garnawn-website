import { TestimonialsSection } from '@/components/testimonials-section/TestimonialsSection';
import { Media } from '@/typings';
import { Image } from 'sanity';

interface Base {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

interface Media extends Base {
  image: Image;
  alt: string;
}

interface Showcase extends Base {
  media: Media;
  media_alt: Media;
  title: string;
  caption: string;
  description: string;
}
interface Banner extends Base {
  buttonText: string;
  media: Media;
  title: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

interface Slug {
  _type: 'slug';
  current: string;
}

interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface Title {
  _type: 'string';
  current: string;
}

interface Testimonial {
  _type: 'object';
  name: string;
  title: string;
  media: Media;
  text: string;
}

interface ShowcaseSection {
  _type: 'object';
  title: string;
  subtitle: string;
  showcases: Showcase[]?;
}
interface BlogsSection {
  _type: 'object';
  title: string;
  subtitle: string;
  blogs: Blog[]?;
}

interface TestimonialsSection {
  _type: 'object';
  title: string;
  subtitle: string;
  testimonials: Testimonial[]?;
}

interface Blog extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  media: Media;
  slug: Slug;
  date: string;
  title: string;
  subtitle: string;
  description: string;
}

interface HomePage extends Base {
  banner: Banner;
  showcaseSection: ShowcaseSection;
  blogsSection: BlogsSection;
  testimonialsSection: TestimonialsSection;
}

interface Page {
  title: string;
  subtitle: string;
  media: Media?;
}

interface ServicesPage extends Page {
  showcases: Showcase[]?;
}

interface AboutPage extends Page {
  captions: TitledCaption[]?;
}
interface BlogsPage extends Page {
  blogs: Blog[]?;
}

interface TitledCaption {
  _type: 'object';
  title: string;
  caption: string;
}

interface ContactPage extends Base {
  title: string;
  subtitle: string;
  media: Media;
}
