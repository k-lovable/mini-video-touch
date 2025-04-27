
import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  videoId: string;
}

const VideoCard = ({ title, thumbnailUrl, videoId }: VideoCardProps) => {
  const handleClick = () => {
    // Create YouTube URL with autoplay and fullscreen parameters
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover aspect-video"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300">
        <Play className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white text-lg font-medium">{title}</p>
      </div>
    </button>
  );
};

export default VideoCard;
