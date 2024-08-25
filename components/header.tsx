"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", url: "/" },
  { label: "ShadCn", url: "/shadcn" },
  { label: "Test", url: "/test" },
];

const Header = () => {
  const currentPath = usePathname();

  return (
    <nav className="mb-5 p-3 bg-slate-50 border-b h-12">
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
    </nav>
  );
};

export default Header;
