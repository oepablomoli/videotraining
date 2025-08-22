import TrainingNavItem from './TrainingNavItem';
import type { TrainingCategory, SidebarItem } from '../types/training';

interface TrainingListProps {
  trainingCategories: TrainingCategory[];
  activeSidebarItem: SidebarItem;
  onCategorySelect: (category: TrainingCategory) => void;
}

const TrainingList = ({ trainingCategories, activeSidebarItem, onCategorySelect }: TrainingListProps) => {
  return (
    <div>
      <h3 className="px-2 mt-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Training</h3>
      {trainingCategories.map((category) => (
        <TrainingNavItem
          key={category.id}
          trainingCategory={category}
          isActive={activeSidebarItem === category.id}
          onClick={onCategorySelect}
        />
      ))}
    </div>
  );
};

export default TrainingList;
