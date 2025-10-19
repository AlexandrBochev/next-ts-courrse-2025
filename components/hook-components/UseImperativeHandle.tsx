"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UI } from "@/constants";
import { forwardRef, useImperativeHandle, useRef } from "react";

type FocusAPI = { focus: () => void };

const ExposedInput = forwardRef<FocusAPI>(function ExposedInput(_, ref) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));
  return <Input ref={inputRef} placeholder={UI.PLACEHOLDERS.focusableInput} />;
});

export const UseImperativeHandle = () => {
  const apiRef = useRef<FocusAPI | null>(null);

  return (
    <CardContent className="flex items-center gap-2">
      <ExposedInput ref={apiRef} />
      <Button onClick={() => apiRef.current?.focus()}>
        {UI.BUTTONS.focus}
      </Button>
    </CardContent>
  );
};
