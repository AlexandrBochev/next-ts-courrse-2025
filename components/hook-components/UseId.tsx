"use client";

import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UI } from "@/constants";
import { useId, useState } from "react";

export const UseId = () => {
  const id = useId();
  const [value, setValue] = useState("");

  return (
    <CardContent className="space-y-2">
      <section className="flex justify-between text-xs">
        <span>
          {UI.LABELS.labelId}: {id}
        </span>{" "}
        =
        <span>
          {UI.LABELS.InputId}: {id}
        </span>
      </section>
      <hr className="my-4" />
      <Label htmlFor={id}>{UI.LABELS.name}</Label>
      <Input
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={UI.PLACEHOLDERS.typeHere}
      />
    </CardContent>
  );
};
