import React from "react";
import ListButton from "./list-button";
import {
  Archive,
  ArchiveX,
  CircleAlert,
  File,
  Inbox,
  MessagesSquare,
  Send,
  ShoppingCart,
  Trash2,
  UsersRound,
} from "lucide-react";
import Divider from "./divider";
import SelectMenu from "./select";

const iconClass = "mr-2 h-4 w-4";

const Sidebar = () => {
  return (
    <div className="w-72 h-full border-r border-gray-300">
      <div className="p-1.5">
        <SelectMenu />
      </div>
      <Divider />
      <div className="flex flex-col p-1.5">
        <ListButton
          selected
          label="Inbox"
          count={128}
          icon={<Inbox className={iconClass} />}
        />
        <ListButton
          label="Drafts"
          count={9}
          icon={<File className={iconClass} />}
        />
        <ListButton label="Sent" icon={<Send className={iconClass} />} />
        <ListButton
          label="Junk"
          count={23}
          icon={<ArchiveX className={iconClass} />}
        />
        <ListButton label="Trash" icon={<Trash2 className={iconClass} />} />
        <ListButton label="Archive" icon={<Archive className={iconClass} />} />
      </div>
      <Divider />
      <div className="flex flex-col p-1.5">
        <ListButton
          label="Social"
          count={972}
          icon={<UsersRound className={iconClass} />}
        />
        <ListButton
          label="Updates"
          count={342}
          icon={<CircleAlert className={iconClass} />}
        />
        <ListButton
          label="Forums"
          count={128}
          icon={<MessagesSquare className={iconClass} />}
        />
        <ListButton
          label="Shopping"
          count={8}
          icon={<ShoppingCart className={iconClass} />}
        />
        <ListButton
          label="Promotions"
          count={21}
          icon={<Archive className={iconClass} />}
        />
      </div>
    </div>
  );
};

export default Sidebar;
