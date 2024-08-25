"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Github, Linkedin, Monitor, Twitter } from "lucide-react";
import TooltipButton from "./tooltip-button";

const links = [
  { label: "Home", url: "/" },
  { label: "ShadCn", url: "/shadcn" },
  { label: "Test", url: "/test" },
];

const Header = () => {
  const currentPath = usePathname();

  return (
    <nav className="mb-5 p-3 bg-slate-50 border-b h-12 flex flex-row justify-between items-center">
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.url}>
            <Link
              href={link.url}
              className={clsx({
                "text-zinc-900": currentPath === link.url,
                "text-zinc-500": currentPath !== link.url,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <TooltipButton label="Personal Website" rounded>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Monitor className="h-5 w-5" />
          </Button>
        </TooltipButton>
        <TooltipButton label="Github" rounded>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
          </Button>
        </TooltipButton>
        <TooltipButton label="Twitter" rounded>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Twitter className="h-5 w-5" />
          </Button>
        </TooltipButton>
        <TooltipButton label="LinkedIn" rounded>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
          </Button>
        </TooltipButton>
      </div>
    </nav>
  );
};

export default Header;
