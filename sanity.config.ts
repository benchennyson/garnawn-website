import { defineConfig } from 'sanity';
import { ListItemBuilder, StructureBuilder, deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { theme } from './theme';
import StudioNavbar from './components/studio-navbar/StudioNavbar';
import Logo from './components/logo/Logo';
import { camelCaseToNormalText } from './lib/helpers';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

// Define the singleton document types
const singletonTypes = new Set([
  'homePage',
  'aboutPage',
  'servicesPage',
  'blogsPage',
  'contactPage',
]);

// Define the generic document types
const genericTypes = new Set([
  'blog',
  'author',
  'category',
  'showcase',
  'titledCaption',
  'testimonial',
]);

const singletonListItems = (S: StructureBuilder, singletons: Set<string>) => {
  return Array.from(singletons).map((typeName) => {
    return singletonListItem(S, typeName);
  });
};

const singletonListItem = (
  S: StructureBuilder,
  typeName: string,
  title?: string
) =>
  S.listItem()
    .title(title || camelCaseToNormalText(typeName))
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName));

const items = (S: StructureBuilder): ListItemBuilder[] => {
  return schemaTypes
    .filter((t) => !singletonTypes.has(t.name) && genericTypes.has(t.name))
    .map((t) => {
      return S.documentTypeListItem(t.name).title(t.title || t.name);
    });
};

export default defineConfig({
  basePath: '/studio',
  name: 'skeleton_studio',
  title: 'Skeleton Studio',
  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([...singletonListItems(S, singletonTypes), ...items(S)]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  theme: theme,
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
});
