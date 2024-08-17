import Divider from "./divider";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Inbox = () => {
  return (
    <div className="flex flex-col w-96 h-full border-r border-grey-300">
      <div className="h-[52px] flex flex-row justify-between items-center p-4">
        <p className="font-semibold text-xl">Inbox</p>
        <div className="bg-gray-100 p-[4px] rounded-md">
          <ToggleGroup type="single" defaultValue="all">
            <ToggleGroupItem value="all" aria-label="Toggle all mail" size="sm">
              All mail
            </ToggleGroupItem>
            <ToggleGroupItem
              value="unread"
              aria-label="Toggle unread mail"
              size="sm"
            >
              Unread
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Inbox;
