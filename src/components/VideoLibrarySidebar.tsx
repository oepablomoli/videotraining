import { useState } from 'react';
import { Search, X } from 'lucide-react';
import type { Video } from '../types/training';

interface VideoLibrarySidebarProps {
  isOpen: boolean;
  onClose: () => void;
  videos: Video[];
  selectedVideo: Video | null;
  onVideoSelect: (video: Video) => void;
}

const VideoLibrarySidebar = ({
  isOpen,
  onClose,
  videos,
  selectedVideo,
  onVideoSelect,
}: VideoLibrarySidebarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Filter videos based on search and tags
  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 || selectedTags.some((tag) => video.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  // Get all unique tags from current videos
  const availableTags = [...new Set(videos.flatMap((video) => video.tags))];

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleVideoClick = (video: Video) => {
    onVideoSelect(video);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40" 
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white border-l border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Video Library</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Close video library"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col p-6 min-h-0">
            {/* Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Tag Filters */}
            {availableTags.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {availableTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
                        selectedTags.includes(tag)
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Video List */}
            <div className="flex-1 overflow-y-auto space-y-3 min-h-0">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => handleVideoClick(video)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    selectedVideo?.id === video.id
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <h4 className="font-medium text-sm text-gray-900 mb-3 line-clamp-2">
                    {video.title}
                  </h4>

                  <div className="flex flex-wrap gap-1">
                    {video.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {video.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-xs text-gray-400">
                        +{video.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {filteredVideos.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm">No videos found</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Try adjusting your search or tag filters
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoLibrarySidebar;
