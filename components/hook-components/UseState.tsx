"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { UI } from "@/constants";
import { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);

  const buttons = [
    {
      label: UI.BUTTONS.plusOne,
      action: () => setCount((c) => c + 1),
      variant: "default",
    },
    {
      label: UI.BUTTONS.reset,
      action: () => setCount(0),
      variant: "outline",
    },
  ] as const;

  return (
    <CardContent className="flex items-center gap-2">
      {buttons.map(({ label, action, variant }) => (
        <Button key={label} onClick={action} variant={variant}>
          {label}
        </Button>
      ))}
      <Label className="text-sm">
        {UI.LABELS.count}: {count}
      </Label>
    </CardContent>
  );
};
