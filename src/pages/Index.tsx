import VideoCard from "@/components/VideoCard";
const videos = [{
  id: "video1",
  title: "Mirza // Garten der Erinnerungen - Garden of Memories",
  thumbnailUrl: "video1.png",
  videoId: "pWd649nyFlA"
}, {
  id: "video2",
  title: "Salman // Vergessene Lieder - Forgotten Songs",
  thumbnailUrl: "video2.png",
  videoId: "KwdYwTNFno4"
}, {
  id: "video3",
  title: "Dochte entzüden - Lighting the Wicks",
  thumbnailUrl: "video3.png",
  videoId: "nTDW5pFgxik"
}, {
  id: "video4",
  title: "Echos von Lalisch - Echoes of Lalish",
  thumbnailUrl: "video4.png",
  videoId: "P3o24REEvhA"
}, {
  id: "video5",
  title: "Mirza // Musikabend - Music Evening",
  thumbnailUrl: "video5.png",
  videoId: "eQPY3s9APds"
}];
const Index = () => {
  return <div className="min-h-screen bg-gray-950 p-6 flex flex-col">
      {/* Title Section */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold space-x-4">
          <span className="text-white">Tap the video to play</span>
          <span className="text-gray-400">Tippen Sie auf das Video zum Abspielen</span>
        </h1>
      </header>

      {/* Videos Grid */}
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto w-full justify-items-center">
          {videos.map((video, index) => <div key={video.id} className={`${index === videos.length - 1 ? "col-start-2" : ""}`}>
              <VideoCard title={video.title} thumbnailUrl={video.thumbnailUrl} videoId={video.videoId} />
            </div>)}
        </div>
      </div>

      {/* Logos Section */}
      <footer className="mt-12 flex justify-center items-center space-x-12">
        <img src="/hawar_logo.png" alt="Logo 1" className="h-12 w-auto" />
        <img src="/amt_logo.svg" alt="Logo 2" className="h-12 w-auto" />
      </footer>
    </div>;
};
export default Index;