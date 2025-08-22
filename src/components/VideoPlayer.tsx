interface VideoPlayerProps {
  vimeoId: string;
  title: string;
}

const VideoPlayer = ({ vimeoId, title }: VideoPlayerProps) => {
  return (
    <div className="aspect-video w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}`}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );
};

export default VideoPlayer;
