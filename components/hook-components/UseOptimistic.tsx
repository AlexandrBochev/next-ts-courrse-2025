"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { UI } from "@/constants";
import { startTransition, useOptimistic, useState, useTransition } from "react";

const fakeRequest = (delta: number) =>
  new Promise<number>((res) => setTimeout(() => res(delta), 700));

export const UseOptimistic = () => {
  const [serverCount, setServerCount] = useState(0);
  const [optimisticCount, addOptimistic] = useOptimistic(
    serverCount,
    (prev, delta: number) => prev + delta
  );
  const [isPending, startTrans] = useTransition();

  const inc = () => {
    startTrans(() => addOptimistic(1));
    fakeRequest(1)
      .then((applied) => setServerCount((c) => c + applied))
      .catch(() => {
        startTransition(() => addOptimistic(-1));
      });
  };

  return (
    <CardContent className="flex items-center justify-between gap-2">
      <Button onClick={inc} disabled={isPending}>
        {UI.BUTTONS.plusOne}
      </Button>
      <span>
        {UI.LABELS.ui}: {optimisticCount}
      </span>
      <span>
        {UI.LABELS.server}: {serverCount}
      </span>
    </CardContent>
  );
};
