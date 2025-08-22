import type { TrainingCategory } from '../types/training';

export const trainingCategories: TrainingCategory[] = [
  {
    id: 'contractor-training',
    title: 'Contractor Training',
    videos: [
      {
        id: 'contractor-demo',
        title: 'OneEthos x CCEF Contractor Demo',
        description: 'Complete overview of the contractor dashboard and workflow',
        vimeoId: '1102358636',
        tags: ['overview', 'dashboard', 'workflow'],
        documents: [
          {
            id: 'contractor-guide',
            title: 'Electrify and Save Contractor Guide',
            downloadUrl: '/documents/Electrify and Save ContractorGuide for MerchantLinQ Experience.pdf',
          },
        ],
      },
      {
        id: 'heat-pump-basics',
        title: 'Heat Pump Installation Basics',
        description: 'Step-by-step guide to proper heat pump installation',
        vimeoId: '1102358636',
        tags: ['installation', 'heat-pump', 'basics'],
        documents: [
          {
            id: 'obr-overview',
            title: 'OBR Program Overview for Contractors',
            downloadUrl: '/documents/OBR Program Overview for Contractors.pdf',
          },
        ],
      },
      {
        id: 'customer-communication',
        title: 'Customer Communication Best Practices',
        description: 'How to effectively communicate with customers during projects',
        vimeoId: '1102358636',
        tags: ['communication', 'customer-service', 'best-practices'],
        documents: [],
      },
    ],
  },
  {
    id: 'advanced-installation',
    title: 'Advanced Installation',
    videos: [
      {
        id: 'troubleshooting',
        title: 'Advanced Troubleshooting Techniques',
        description: 'Advanced methods for diagnosing and fixing common issues',
        vimeoId: '1102358636',
        tags: ['troubleshooting', 'advanced', 'diagnostics'],
        documents: [
          {
            id: 'contractor-guide-advanced',
            title: 'Electrify and Save Contractor Guide',
            downloadUrl: '/documents/Electrify and Save ContractorGuide for MerchantLinQ Experience.pdf',
          },
        ],
      },
    ],
  },
];
