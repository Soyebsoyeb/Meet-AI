import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { VideoIcon, Ban } from "lucide-react"; // Changed from BanIcon to Ban (correct import)

interface Props {
  meetingId: string;
  onCancelMeeting: () => void;
  isCancelling: boolean;
}

export const UpcomingState = ({
  meetingId,
  onCancelMeeting,
  isCancelling,
}: Props) => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        image="/upcoming.svg"
        title="Meeting Not Started"
        description="Your meeting will begin soon. Join when ready to start the session."
      />

      <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-3 w-full">
        <Button
          variant="destructive"
          className="w-full lg:w-auto gap-2"
          onClick={onCancelMeeting}
          disabled={isCancelling}
          aria-label="Cancel meeting"
        >
          <Ban className="h-4 w-4" />
          Cancel Meeting
        </Button>

        <Button
          asChild
          className="w-full lg:w-auto gap-2 bg-primary hover:bg-primary/90"
          disabled={isCancelling}
          aria-label="Start meeting"
        >
          <Link href={`/call/${meetingId}`} className="flex items-center gap-2">
            <VideoIcon className="h-4 w-4" />
            Start Meeting
          </Link>
        </Button>
      </div>
    </div>
  );
};
