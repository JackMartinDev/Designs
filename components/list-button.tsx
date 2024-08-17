import React, { ReactNode } from "react";
import { Button } from "./ui/button";

type Props = {
  label: string;
  selected?: boolean;
  count?: number;
  icon?: ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
};

const ListButton = ({ label, count, icon, variant, selected }: Props) => {
  return (
    <Button
      variant={selected ? "default" : "ghost"}
      className="flex flex-row justify-between w-full"
    >
      <div className="flex flex-row items-center">
        {icon}
        {label}
      </div>
      {count}
    </Button>
  );
};

export default ListButton;
