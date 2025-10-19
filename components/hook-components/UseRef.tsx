"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UI } from "@/constants";
import { useRef } from "react";

export const UseRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <CardContent className="flex items-center gap-2">
      <Input ref={inputRef} placeholder={UI.PLACEHOLDERS.clickFocus} />

      <Button onClick={() => inputRef.current?.focus()}>
        {UI.BUTTONS.focus}
      </Button>
    </CardContent>
  );
};
