"use client";

import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { UI } from "@/constants";
import { useDeferredValue, useEffect, useMemo, useState } from "react";

export const UseDeferredValue = () => {
  const [text, setText] = useState("");
  const [computing, setComputing] = useState(false);
  const deferredText = useDeferredValue(text);

  useEffect(() => {
    setComputing(true);
    const t = setTimeout(() => setComputing(false), 600);
    return () => clearTimeout(t);
  }, [deferredText]);

  const transformed = useMemo(() => {
    return deferredText.trim().toUpperCase();
  }, [deferredText]);

  return (
    <CardContent className="space-y-4">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={UI.PLACEHOLDERS.typeHere}
      />
      <Label>
        {UI.LABELS.result}: {computing ? <Spinner /> : transformed || ""}
      </Label>
    </CardContent>
  );
};
