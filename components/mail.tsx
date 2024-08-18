import {
  Archive,
  ArchiveX,
  Clock,
  EllipsisVertical,
  Forward,
  Reply,
  ReplyAll,
  Trash2,
} from "lucide-react";
import Divider from "./divider";
import TooltipButton from "./tooltip-button";
import { Separator } from "./ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import EmailHeader from "./email-header";

const iconClass = "h-4 w-4";

const Mail = () => {
  return (
    <div className="flex flex-col flex-grow h-full ">
      <div className="h-[52px] flex flex-row justify-between items-center p-4">
        <div className="flex flex-row items-center gap-2">
          <TooltipButton label="Archive">
            <Archive className={iconClass} />
          </TooltipButton>
          <TooltipButton label="Move to Junk">
            <ArchiveX className={iconClass} />
          </TooltipButton>
          <TooltipButton label="Move to Trash">
            <Trash2 className={iconClass} />
          </TooltipButton>
          <Separator orientation="vertical" className="h-6" />
          <TooltipButton label="Snooze">
            <Clock className={iconClass} />
          </TooltipButton>
        </div>
        <div className="flex flex-row items-center gap-2">
          <TooltipButton label="Reply">
            <Reply className={iconClass} />
          </TooltipButton>
          <TooltipButton label="Reply all">
            <ReplyAll className={iconClass} />
          </TooltipButton>
          <TooltipButton label="Forward">
            <Forward className={iconClass} />
          </TooltipButton>
          <Separator orientation="vertical" className="h-6" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <EllipsisVertical className={iconClass} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuItem>Mark as unread</DropdownMenuItem>
              <DropdownMenuItem>Star thread</DropdownMenuItem>
              <DropdownMenuItem>Add label</DropdownMenuItem>
              <DropdownMenuItem>Mute thread</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Divider />
      <EmailHeader />
      <Divider />
    </div>
  );
};

export default Mail;
