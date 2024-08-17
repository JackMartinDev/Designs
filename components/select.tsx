import { CloudIcon, Mail, Triangle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const iconClass = "mr-2 h-4 w-4";

const SelectMenu = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select an email" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="gmail">
            <div className="flex flex-row items-center justify-between">
              <Triangle className={iconClass} />
              jackmartin.dev@gmail.com
            </div>
          </SelectItem>
          <SelectItem value="vercel">
            <div className="flex flex-row items-center justify-between">
              <Mail className={iconClass} />
              jackmartin.dev@example.com
            </div>
          </SelectItem>
          <SelectItem value="icloud">
            <div className="flex flex-row items-center justify-between">
              <CloudIcon className={iconClass} />
              jackmartin.dev@icloud.com
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectMenu;
