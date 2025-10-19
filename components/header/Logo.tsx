import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import { CodeXml } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href={ROUTES.HOME}>
        <CodeXml className="size-5" />
      </Link>
    </Button>
  );
};
