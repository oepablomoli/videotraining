import TrainingNavItem from './TrainingNavItem';
import type { TrainingModule, SidebarItem } from '../types/training';

interface TrainingListProps {
  trainingModules: TrainingModule[];
  activeSidebarItem: SidebarItem;
  onTrainingSelect: (trainingModule: TrainingModule) => void;
}

const TrainingList = ({ trainingModules, activeSidebarItem, onTrainingSelect }: TrainingListProps) => {
  return (
    <div>
      <h3 className="px-2 mt-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Training</h3>
      {trainingModules.map((training) => (
        <TrainingNavItem
          key={training.id}
          trainingModule={training}
          isActive={activeSidebarItem === `Training-${training.id}`}
          onClick={onTrainingSelect}
        />
      ))}
    </div>
  );
};

export default TrainingList;
