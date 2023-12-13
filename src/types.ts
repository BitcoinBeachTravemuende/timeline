import { z } from "astro/zod";

export const eventType = z.enum([
  "meetup",
  "action",
  "software",
  "cinema",
  "misc",
  "unknown",
]);

export type EventType = z.infer<typeof eventType>;

const lang = z.enum(["de", "en"]);
export type Lang = z.infer<typeof lang>;

const event = z.object({
  type: eventType.default("unknown"),
  date: z.date(),
  block: z.number(),
  headline: z.record(
    lang,
    z.string()
  ),
  description: z.record(
    lang,
    z.string()
  ),
  link: z.string().nullable(),
});

export type Event = z.infer<typeof event>;

export const events = event.array();

export type Events = z.infer<typeof events>;

export const translationKey = z.enum([
  "title",
  "blocktime"
]);

// export const translationKey = z.union(
//   [z.literal("title"),
//   z.literal("blocktime")]
// );

export type TranslationKey = z.infer<typeof translationKey>;

export const translation = z.record(
  translationKey,
  z.string().min(1)
  );

export type Translation = z.infer<typeof translation>;
