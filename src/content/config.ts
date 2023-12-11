import { defineCollection, z } from 'astro:content';
import { events, translation } from '../types';

// Defining Collections
// https://docs.astro.build/en/guides/content-collections/#defining-collections


// Note: We have just one collection: 'events' with a single *.md file
// `src/content/events.md` that contains all events.
const eventsCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    events
  }),
 });

 const i18nCollection = defineCollection({
  type: 'data', 
  schema: translation,
 });

export const collections = {
  'events': eventsCollection,
  'i18n': i18nCollection,
};
