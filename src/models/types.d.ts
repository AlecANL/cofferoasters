export interface Menu {
  id: string;
  name: string;
  url: string;
}

export interface SocialMedia {
  id: string;
  icon: string;
  url: string;
}

export interface FormValues {
  drink: string;
  type: string;
  amount: string;
  grind: string;
  frequency: string;
}

export type FormValuesName = keyof FormValues;
