import type { Video } from '../types/training';
import DocumentCard from './DocumentCard';

interface VideoDisplayProps {
  video: Video;
}

const VideoDisplay = ({ video }: VideoDisplayProps) => {
  return (
    <div className="space-y-8">
      {/* Video Header */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{video.title}</h3>
      </div>

      {/* Video Player */}
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        {video.vimeoId ? (
          <iframe
            src={`https://player.vimeo.com/video/${video.vimeoId}`}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={video.title}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-xl font-medium mb-2">Sorry</p>
              <p className="text-sm">This video does not exist.</p>
            </div>
          </div>
        )}
      </div>

      {/* Video Details */}
      <div className="space-y-4">
        <p className="text-gray-600">{video.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {video.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Associated Documents */}
      {video.documents.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-900">Associated Documents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {video.documents.map((document) => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDisplay;
