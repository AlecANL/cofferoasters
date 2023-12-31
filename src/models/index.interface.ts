export const HOME_SECTIONS = {
  COLLECTIONS: 0,
  FEATURES: 1,
  HOW_IT_WORKS: 2,
} as const;

export interface SectionUI {
  id:      string;
  name:    string;
  section: Array<Section>;
}

export interface Section {
  id:    string;
  name:  string;
  place: number;
  items: Item[];
  description: string;
}

export interface Item {
  id:          string;
  title:       string;
  description: string;
  image:       null;
}
