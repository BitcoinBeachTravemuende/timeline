import { getEntry } from 'astro:content'
import type { Lang, TranslationKey } from './types'

/**
 * Helper to get translations from content/i18n files
 **/
export const useTranslations = (lang: Lang) => async (key: TranslationKey) =>
  (await getEntry('i18n', lang)).data[key] ??
  // Don't error, but show missing translation key
  `${lang}.${key}`
