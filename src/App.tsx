import { useState } from 'react';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import TrainingModule from './components/TrainingModule';
import { trainingModules } from './data/trainingData';
import type { TrainingModule as TrainingModuleType, SidebarItem } from './types/training';





// --- MAIN APP COMPONENT ---
export default function App() {
  // State to keep track of the currently selected training module.
  // It defaults to the first item in our data array.
  const [selectedTraining, setSelectedTraining] = useState<TrainingModuleType>(trainingModules[0]);
  const [activeSidebarItem, setActiveSidebarItem] = useState<SidebarItem>(`Training-${trainingModules[0].id}`);

  const handleSidebarClick = (item: string) => {
    setActiveSidebarItem(item as SidebarItem);
    // In a real app, you would navigate to different pages here.
    // For this demo, we only have functionality for 'Training'.
  };
  
  const handleTrainingSelect = (trainingModule: TrainingModuleType) => {
    setSelectedTraining(trainingModule);
    setActiveSidebarItem(`Training-${trainingModule.id}`);
  };

  return (
    <Layout>
      <Sidebar
        trainingModules={trainingModules}
        activeSidebarItem={activeSidebarItem}
        onSidebarClick={handleSidebarClick}
        onTrainingSelect={handleTrainingSelect}
      />
      
      <MainContent>
        {selectedTraining && (
          <TrainingModule trainingModule={selectedTraining} />
        )}
      </MainContent>
    </Layout>
  );
}

