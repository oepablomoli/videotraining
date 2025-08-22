import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface SidebarNavItemProps {
  icon: ReactNode;
  label: string;
  isActive: boolean;
  showChevron?: boolean;
  onClick: () => void;
}

const SidebarNavItem = ({ icon, label, isActive, showChevron = false, onClick }: SidebarNavItemProps) => {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors ${
        isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <div className="flex items-center space-x-3">
        {icon}
        <span>{label}</span>
      </div>
      {showChevron && <ChevronRight className="w-5 h-5" />}
    </a>
  );
};

export default SidebarNavItem;
