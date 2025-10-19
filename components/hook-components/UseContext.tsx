"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { UI } from "@/constants";
import { Moon, Sun } from "lucide-react";
import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";
type Ctx = { theme: Theme; setTheme: (t: Theme) => void };

const DemoContext = createContext<Ctx | null>(null);

export const UseContext = () => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <CardContent className="flex items-center justify-between gap-2 ">
      <DemoContext.Provider value={{ theme, setTheme }}>
        <Controls />
        {theme === "light" ? <Sun /> : <Moon />}
      </DemoContext.Provider>
    </CardContent>
  );
};

const Controls = () => {
  const ctx = useContext(DemoContext);
  if (!ctx) return null;

  return (
    <Button
      onClick={() => ctx.setTheme(ctx.theme === "light" ? "dark" : "light")}
    >
      {UI.BUTTONS.toggle}
    </Button>
  );
};
