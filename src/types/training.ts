export interface Document {
  id: string;
  title: string;
  downloadUrl: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  vimeoId?: string;
  tags: string[];
  documents: Document[];
}

export interface TrainingCategory {
  id: string;
  title: string;
  videos: Video[];
}

export type SidebarItem = 'Dashboard' | 'Contractors' | 'Organization' | string;
