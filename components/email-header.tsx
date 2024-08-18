import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const EmailHeader = () => {
  return (
    <div className="flex flex-row justify-between p-3">
      <div className="flex flex-row gap-4">
        <Avatar>
          <AvatarImage src="ht://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <strong className="text-sm">William Smith</strong>
          <p className="text-xs">Meeting tomorrow</p>
          <p className="text-xs">Reply-To: jackmartin.dev@gmail.com</p>
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-400">Oct 22, 2023, 9:00:00 AM</p>
      </div>
    </div>
  );
};

export default EmailHeader;
