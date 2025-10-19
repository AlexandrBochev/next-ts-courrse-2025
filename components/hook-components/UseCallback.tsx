"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { UI } from "@/constants";
import { memo, useCallback, useEffect, useRef, useState } from "react";

export const UseCallback = () => {
  const [count, setCount] = useState(0);
  const inc = useCallback(() => setCount((c) => c + 1), []);

  return (
    <CardContent className="flex items-center justify-between gap-2">
      <Label className="w-20">
        {UI.LABELS.count}: {count}
      </Label>
      <StableButton onClick={inc} label={UI.BUTTONS.plusOne} />
    </CardContent>
  );
};

type StableButtonProps = {
  onClick: () => void;
  label: string;
};

const StableButton = memo(function StableButton({
  onClick,
  label,
}: StableButtonProps) {
  const renders = useRef(1);
  useEffect(() => {
    renders.current += 1;
  });

  return (
    <>
      <Button onClick={onClick}>{label}</Button>
      <Label>
        {UI.LABELS.renders}: {renders.current}
      </Label>
    </>
  );
});
