'use client';

import { definePreview } from 'next-sanity/preview';
import { dataset, projectId } from './sanity.client';

if (!projectId || !dataset) {
  throw new Error(
    'Missing projectId or dataset. Check your sanity.json or .env'
  );
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly: () => {
    throw new Error('Not authenticated - preview not available');
  },
});
