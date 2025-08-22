import { LayoutDashboard, Users, Building2 } from 'lucide-react';
import SidebarHeader from './SidebarHeader';
import SidebarNavItem from './SidebarNavItem';
import TrainingList from './TrainingList';
import type { TrainingCategory, SidebarItem } from '../types/training';

interface SidebarProps {
  trainingCategories: TrainingCategory[];
  activeSidebarItem: SidebarItem;
  onSidebarClick: (item: string) => void;
  onCategorySelect: (category: TrainingCategory) => void;
}

const Sidebar = ({ 
  trainingCategories, 
  activeSidebarItem, 
  onSidebarClick, 
  onCategorySelect 
}: SidebarProps) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <SidebarHeader />
      
      <nav className="flex-1 p-4 space-y-2">
        <h3 className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Platform</h3>
        
        <SidebarNavItem
          icon={<LayoutDashboard className="w-5 h-5" />}
          label="Dashboard"
          isActive={activeSidebarItem === 'Dashboard'}
          onClick={() => onSidebarClick('Dashboard')}
        />
        
        <SidebarNavItem
          icon={<Users className="w-5 h-5" />}
          label="Contractors"
          isActive={activeSidebarItem === 'Contractors'}
          showChevron
          onClick={() => onSidebarClick('Contractors')}
        />
        
        <SidebarNavItem
          icon={<Building2 className="w-5 h-5" />}
          label="Organization"
          isActive={activeSidebarItem === 'Organization'}
          showChevron
          onClick={() => onSidebarClick('Organization')}
        />

        <TrainingList
          trainingCategories={trainingCategories}
          activeSidebarItem={activeSidebarItem}
          onCategorySelect={onCategorySelect}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
