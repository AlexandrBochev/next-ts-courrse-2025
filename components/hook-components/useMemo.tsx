"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UI } from "@/constants";
import { useMemo, useState } from "react";

export const UseMemo = () => {
  const [text, setText] = useState("");
  const [tick, setTick] = useState(0);

  const transformed = useMemo(() => text.trim().toUpperCase(), [text]);

  return (
    <CardContent>
      <Input
        value={text}
        id="input"
        onChange={(e) => setText(e.target.value)}
        placeholder={UI.PLACEHOLDERS.typeHere}
      />
      <Label htmlFor="input" className="mt-4">
        {UI.LABELS.result}: {transformed}
      </Label>
      <hr className="my-4" />
      <section className="flex justify-between items-end">
        <Button id={UI.BUTTONS.rerender} onClick={() => setTick((t) => t + 1)}>
          {UI.BUTTONS.rerender}
        </Button>
        <Label htmlFor={UI.BUTTONS.rerender}>
          {UI.LABELS.renders}: {tick}
        </Label>
      </section>
    </CardContent>
  );
};
