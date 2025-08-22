import type { ReactNode } from 'react';
import Header from './Header';

interface MainContentProps {
  children: ReactNode;
}

const MainContent = ({ children }: MainContentProps) => {
  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <Header />
      {children}
    </main>
  );
};

export default MainContent;
