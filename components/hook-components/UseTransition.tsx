"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { UI } from "@/constants";
import { useState, useTransition } from "react";

export const UseTransition = () => {
  const [items, setItems] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleAddItem = () => {
    startTransition(() => {
      const next = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
      setItems(next);
    });
  };

  return (
    <CardContent className="flex items-center gap-2">
      <Button onClick={handleAddItem}>{UI.BUTTONS.rerender}</Button>
      {isPending ? (
        <Spinner />
      ) : (
        <Label>
          {UI.LABELS.items}: {items.length}
        </Label>
      )}
    </CardContent>
  );
};
