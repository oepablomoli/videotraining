import type { ReactNode } from 'react';
import Header from './Header';

interface MainContentProps {
  children: ReactNode;
  onToggleSidebar?: () => void;
}

const MainContent = ({ children, onToggleSidebar }: MainContentProps) => {
  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <Header onToggleSidebar={onToggleSidebar} />
      {children}
    </main>
  );
};

export default MainContent;
