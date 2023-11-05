export interface Collapse {
  id:    string;
  name:  string;
  items: CollapseCollection[];
}

export interface CollapseCollection {
  id:    string;
  title: string;
  group: string;
  items: CollapseItem[];
}

export interface CollapseItem {
  id: string;
  name:        string;
  description: string;
  group:       string;
  value:       string;
}
