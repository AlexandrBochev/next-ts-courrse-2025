"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Item } from "@/components/ui/item";
import { Label } from "@/components/ui/label";
import { UI } from "@/constants";
import { useLayoutEffect, useRef, useState } from "react";

export const UseLayoutEffect = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useLayoutEffect(() => {
    if (boxRef.current) setHeight(boxRef.current.offsetHeight);
  }, [expanded]);

  return (
    <CardContent className="flex items-start justify-between gap-2">
      <div className="flex flex-col gap-2">
        <Button onClick={() => setExpanded((v) => !v)} variant="default">
          {UI.LABELS.openClose(expanded)}
        </Button>
        <Label className="text-xs">
          {UI.LABELS.height} {height}
          {UI.UNITS.pixels}
        </Label>
      </div>

      <Item variant="outline" ref={boxRef} className="text-xs w-44">
        {UI.MESSAGES.loremIpsum(expanded)}
      </Item>
    </CardContent>
  );
};
