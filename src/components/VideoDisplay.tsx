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

      {/* No extra details needed for simplified view */}

      {/* Supporting Documents */}
      {video.documents.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-900">Supporting Documents</h2>
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
