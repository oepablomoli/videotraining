import { useState } from 'react';
import { Video as VideoIcon } from 'lucide-react';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import VideoDisplay from './components/VideoDisplay';
import VideoLibrarySidebar from './components/VideoLibrarySidebar';
import { trainingCategories } from './data/trainingData';
import type { TrainingCategory, Video, SidebarItem } from './types/training';

// --- MAIN APP COMPONENT ---
export default function App() {
  // State management for the new video-based system
  const [selectedCategory, setSelectedCategory] = useState<TrainingCategory>(trainingCategories[0]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(
    trainingCategories[0].videos.length > 0 ? trainingCategories[0].videos[0] : null
  );
  const [activeSidebarItem, setActiveSidebarItem] = useState<SidebarItem>(trainingCategories[0].id);
  const [showVideoLibrary, setShowVideoLibrary] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarClick = (item: string) => {
    setActiveSidebarItem(item as SidebarItem);
    // In a real app, you would navigate to different pages here.
    // For this demo, we only have functionality for 'Training'.
  };
  
  const handleCategorySelect = (category: TrainingCategory) => {
    setSelectedCategory(category);
    setActiveSidebarItem(category.id);
    // Auto-select first video in the category
    if (category.videos.length > 0) {
      setSelectedVideo(category.videos[0]);
    } else {
      setSelectedVideo(null);
    }
  };

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleToggleVideoLibrary = () => {
    setShowVideoLibrary(!showVideoLibrary);
  };

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <Layout>
      <Sidebar
        trainingCategories={trainingCategories}
        activeSidebarItem={activeSidebarItem}
        onSidebarClick={handleSidebarClick}
        onCategorySelect={handleCategorySelect}
        isCollapsed={sidebarCollapsed}
      />
      
      <MainContent onToggleSidebar={handleToggleSidebar}>
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">{selectedCategory.title}</h1>
            <button
              onClick={handleToggleVideoLibrary}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              <VideoIcon className="h-4 w-4" />
              Video Library
            </button>
          </div>

          <div>
            
            {/* Video Display */}
            {selectedVideo ? (
              <VideoDisplay video={selectedVideo} />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No videos available in this category.</p>
              </div>
            )}
          </div>
        </div>
      </MainContent>

      {/* Video Library Sidebar */}
      <VideoLibrarySidebar
        isOpen={showVideoLibrary}
        onClose={() => {setShowVideoLibrary(false);}}
        videos={selectedCategory.videos}
        selectedVideo={selectedVideo}
        onVideoSelect={handleVideoSelect}
      />
    </Layout>
  );
}