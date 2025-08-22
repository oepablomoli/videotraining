import type { TrainingModule } from '../types/training';

export const trainingModules: TrainingModule[] = [
  {
    id: 1,
    title: 'Contractor Training',
    vimeoId: '1102358636', // Example Vimeo video ID
    documents: [
      {
        title: 'Electrify and Save Contractor Guide',
        url: '/documents/Electrify and Save ContractorGuide for MerchantLinQ Experience.pdf', 
      },
      {
        title: 'OBR Program Overview for Contractors',
        url: '/documents/OBR Program Overview for Contractors.pdf', 
      },
    ],
  },
  {
    id: 2,
    title: 'Advanced Installation',
    vimeoId: '1102358636', 
    documents: [
      {
        title: 'Electrify and Save Contractor Guide',
        url: '/documents/Electrify and Save ContractorGuide for MerchantLinQ Experience.pdf', 
      },
      {
        title: 'OBR Program Overview for Contractors',
        url: '/documents/OBR Program Overview for Contractors.pdf', 
      },
    ],
  },
];
