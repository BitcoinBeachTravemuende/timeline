import { defineCollection, z } from 'astro:content';
import { events } from '../types';

// Defining Collections
// https://docs.astro.build/en/guides/content-collections/#defining-collections


// Note: We have just one collection: 'events' with a single *.md file
// `src/content/events.md` that contains all events.
const eventsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    events
  }),
 });

export const collections = {
  'events': eventsCollection,
};
