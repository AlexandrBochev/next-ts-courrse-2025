"use client";

import { UI } from "@/constants";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6">
      {UI.NAV_BAR.map(({ title, href }) => (
        <Link
          key={title}
          href={href}
          className={cn(
            "text-muted-foreground hover:text-foreground",
            {"text-foreground": pathname === href}
          )}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};
