import type { ColorsByType, Lang } from "./types";

export const LANGUAGES: Lang[] = ['de', 'en'];

export const COLORS_TEXT: ColorsByType = {
  action: `text-action dark:text-actionDark`,
  meetup: `text-meetup`,
  tech: `text-tech`,
  cinema: `text-cinema dark:text-cinemaDark`,
  misc: `text-misc`,
};

export const COLORS_BG: ColorsByType = {
  action: `bg-action dark:bg-actionDark`,
  meetup: `bg-meetup`,
  tech: `bg-tech`,
  cinema: `bg-cinema dark:bg-cinemaDark`,
  misc: `bg-misc`,
};

export const COLORS_BORDER: ColorsByType = {
  action: `border-action dark:border-actionDark`,
  meetup: `border-meetup`,
  tech: `border-tech`,
  cinema: `border-cinema dark:border-cinemaDark`,
  misc: `border-misc`,
};
