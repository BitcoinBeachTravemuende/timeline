
export type BBTEventType = 'meetup' | 'tech-meetup' | 'action' | 'software' | 'misc'

export type Lang = "de" | "en";

export type BBTEvent = {
  type: BBTEventType;
  date: Date;
  block: number;
  headline: string;
  description: string;
  link?: string;
}

export type BBTEvents = BBTEvent[];
