"use client";

import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { UI } from "@/constants";
import { useEffect, useState } from "react";

export const UseEffect = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <CardContent className="flex items-center gap-2">
      <Label className="text-sm">
        {UI.LABELS.width} {width}px
      </Label>
    </CardContent>
  );
};
