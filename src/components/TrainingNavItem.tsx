import { GraduationCap } from 'lucide-react';
import type { TrainingCategory } from '../types/training';

interface TrainingNavItemProps {
  trainingCategory: TrainingCategory;
  isActive: boolean;
  onClick: (category: TrainingCategory) => void;
}

const TrainingNavItem = ({ trainingCategory, isActive, onClick }: TrainingNavItemProps) => {
  const videoCount = trainingCategory.videos.length;

  return (
    <button
      onClick={() => {onClick(trainingCategory);}}
      className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors text-left ${
        isActive ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <GraduationCap className="w-5 h-5" />
      <div className="flex-1">
        <div>{trainingCategory.title}</div>
        <div className={`text-xs ${isActive ? 'text-blue-100' : 'text-gray-400'}`}>
          {videoCount} video{videoCount !== 1 ? 's' : ''}
        </div>
      </div>
    </button>
  );
};

export default TrainingNavItem;
