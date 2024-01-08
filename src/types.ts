import { z } from 'astro/zod'

export const eventType = z.enum(['meetup', 'action', 'tech', 'cinema', 'misc'])

export type EventType = z.infer<typeof eventType>

const lang = z.enum(['de', 'en'])
export type Lang = z.infer<typeof lang>

const translations = z.record(lang, z.string())

const oTranslations = translations.optional()

const event = z.object({
  type: eventType,
  date: z.date(),
  block: z.number(),
  headline: translations,
  description: oTranslations,
  link: z.object({
    label: translations,
    url: z.string().url()
  })
})

export type Event = z.infer<typeof event>

export const events = event.array()

export type Events = z.infer<typeof events>

export const translationKey = z.enum([
  'title',
  'blocktime',
  ...eventType.options,
  'entries',
  'theEnd',
  'theBeginning',
  'builtWith'
])

export type TranslationKey = z.infer<typeof translationKey>

export const translation = z.record(translationKey, z.string().min(1))

export type Translation = z.infer<typeof translation>

export type ColorsByType = {
  [key in EventType]: string
}
