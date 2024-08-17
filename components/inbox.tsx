import Divider from "./divider";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "./ui/input";
import InboxMail from "./inbox-mail";

const Inbox = () => {
  return (
    <div className="flex flex-col w-96 h-full border-r border-grey-300">
      <div className="h-[52px] flex flex-row justify-between items-center p-4">
        <p className="font-semibold text-xl">Inbox</p>
        <div className="bg-gray-100 p-[4px] rounded-md">
          <ToggleGroup type="single" defaultValue="all">
            <ToggleGroupItem
              value="all"
              aria-label="Toggle all mail"
              size="xs"
              variant="custom"
            >
              All mail
            </ToggleGroupItem>
            <ToggleGroupItem
              value="unread"
              aria-label="Toggle unread mail"
              variant="custom"
              size="xs"
            >
              Unread
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-3 p-4 h-full overflow-y-hidden">
        <Input placeholder="Search" />
        <div className="flex flex-col gap-2 overflow-y-auto custom-scrollbar">
          <InboxMail />
          <InboxMail />
          <InboxMail />
          <InboxMail />
          <InboxMail />
          <InboxMail />
          <InboxMail />
          <InboxMail />
          <InboxMail />
          <InboxMail />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
