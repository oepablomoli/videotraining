import type { TrainingCategory } from '../types/training';

// Single training category with one video and two supporting documents
export const trainingCategories: TrainingCategory[] = [
  {
    id: 'contractor-training',
    title: 'Training',
    videos: [
      {
        id: 'contractor-training-video',
        title: 'Contractor Training Video',
        description: '',
        vimeoId: '1102358636',
        tags: [],
        documents: [
          {
            id: 'contractor-guide',
            title: 'Electrify and Save Contractor Guide',
            downloadUrl: '/documents/Electrify and Save ContractorGuide for MerchantLinQ Experience.pdf',
          },
          {
            id: 'program-overview',
            title: 'Electrify and Save Program Overview',
            downloadUrl: '/documents/OBR Program Overview for Contractors.pdf',
          },
        ],
      },
    ],
  },
];
