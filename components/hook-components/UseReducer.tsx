"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { UI } from "@/constants";
import { useReducer } from "react";

type State = { count: number };
type Action = { type: "inc" | "dec" | "reset" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const buttons = [
    {
      label: UI.BUTTONS.minusOne,
      action: () => dispatch({ type: "dec" }),
      variant: "outline" as const,
    },
    {
      label: UI.BUTTONS.plusOne,
      action: () => dispatch({ type: "inc" }),
      variant: "default" as const,
    },
    {
      label: UI.BUTTONS.reset,
      action: () => dispatch({ type: "reset" }),
      variant: "outline" as const,
    },
  ] as const;

  return (
    <CardContent className="flex items-center gap-2">
      {buttons.map(({ label, action, variant }) => (
        <Button key={label} onClick={action} variant={variant}>
          {label}
        </Button>
      ))}
      <Label className="text-sm">
        {UI.LABELS.count}: {state.count}
      </Label>
    </CardContent>
  );
};
