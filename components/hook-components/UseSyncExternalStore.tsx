"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { UI } from "@/constants";
import { useCallback, useState, useSyncExternalStore } from "react";

const getSnapshot = () =>
  typeof window === "undefined" ? 0 : window.innerWidth;

const getServerSnapshot = () => 0;

export const UseSyncExternalStore = () => {
  const [enabled, setEnabled] = useState(true);

  const subscribe = useCallback(
    (callback: () => void) => {
      if (!enabled) return () => {};
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    [enabled]
  );

  const width = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <CardContent className="flex items-end justify-between gap-2">
      <Button onClick={() => setEnabled((e) => !e)}>
        {enabled ? UI.BUTTONS.unsubscribe : UI.BUTTONS.subscribe}
      </Button>
      <Label>
        {enabled
          ? `${UI.LABELS.width}: ${width}${UI.UNITS.pixels}`
          : UI.LABELS.paused}
      </Label>
    </CardContent>
  );
};
