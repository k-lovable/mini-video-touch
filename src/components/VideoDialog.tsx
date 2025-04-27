
import { ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface VideoDialogProps {
  videoId: string;
  children: React.ReactNode;
}

const VideoDialog = ({ videoId, children }: VideoDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90vw] h-[80vh] p-0 overflow-hidden rounded-lg">
        <div className="relative h-full w-full bg-black">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-4 z-10 text-white hover:bg-white/10"
            onClick={() => {
              const closeButton = document.querySelector('[data-dialog-close]') as HTMLButtonElement;
              if (closeButton) closeButton.click();
            }}
          >
            <ArrowLeft className="h-8 w-8" />
          </Button>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;
