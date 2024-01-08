import { defineCollection } from 'astro:content'
import { events, translation } from '../types'

// Defining Collections to provide all data anybody can update easily
// Note: Data in YAML needs type 'data', data in Markdown needs type 'content'
// https://docs.astro.build/en/guides/content-collections/#defining-collections

const eventsCollection = defineCollection({
  type: 'data',
  schema: events
})

const i18nCollection = defineCollection({
  type: 'data',
  schema: translation
})

export const collections = {
  events: eventsCollection,
  i18n: i18nCollection
}
