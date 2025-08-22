import { GraduationCap } from 'lucide-react';
import type { TrainingModule } from '../types/training';

interface TrainingNavItemProps {
  trainingModule: TrainingModule;
  isActive: boolean;
  onClick: (trainingModule: TrainingModule) => void;
}

const TrainingNavItem = ({ trainingModule, isActive, onClick }: TrainingNavItemProps) => {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick(trainingModule);
      }}
      className={`flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
        isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <GraduationCap className="w-5 h-5" />
      <span>{trainingModule.title}</span>
    </a>
  );
};

export default TrainingNavItem;
