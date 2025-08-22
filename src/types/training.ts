export interface Document {
  title: string;
  url: string;
}

export interface TrainingModule {
  id: number;
  title: string;
  vimeoId: string;
  documents: Document[];
}

export type SidebarItem = 'Dashboard' | 'Contractors' | 'Organization' | `Training-${number}`;
