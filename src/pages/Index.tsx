
import VideoCard from "@/components/VideoCard";

const videos = [
  {
    id: "video1",
    title: "Introduction",
    thumbnailUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    videoId: "YOUR_YOUTUBE_ID_1"
  },
  {
    id: "video2",
    title: "Getting Started",
    thumbnailUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    videoId: "YOUR_YOUTUBE_ID_2"
  },
  {
    id: "video3",
    title: "Key Features",
    thumbnailUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    videoId: "YOUR_YOUTUBE_ID_3"
  },
  {
    id: "video4",
    title: "Tutorial",
    thumbnailUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    videoId: "YOUR_YOUTUBE_ID_4"
  },
  {
    id: "video5",
    title: "Advanced Topics",
    thumbnailUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    videoId: "YOUR_YOUTUBE_ID_5"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
      {/* Title Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold space-x-4">
          <span>Tap the video to play</span>
          <span className="text-gray-600">Tippen Sie auf das Video zum Abspielen</span>
        </h1>
      </header>

      {/* Videos Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div key={video.id} className={index === videos.length - 1 ? "col-start-2" : ""}>
              <VideoCard
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                videoId={video.videoId}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Logos Section */}
      <footer className="mt-8 flex justify-center items-center space-x-8">
        <img
          src="/placeholder.svg"
          alt="Logo 1"
          className="h-12 w-auto"
        />
        <img
          src="/placeholder.svg"
          alt="Logo 2"
          className="h-12 w-auto"
        />
      </footer>
    </div>
  );
};

export default Index;
