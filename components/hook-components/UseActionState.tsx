"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { UI } from "@/constants";
import { useActionState } from "react";

async function saveNameAction(prevState: string, formData: FormData) {
  const name = String(formData.get(UI.LABELS.name) ?? "");
  await new Promise((r) => setTimeout(r, 700));
  return name.trim();
}

export const UseActionState = () => {
  const [name, formAction, isPending] = useActionState(saveNameAction, "");

  return (
    <CardContent className="space-y-2">
      <form action={formAction} className="flex items-center gap-2">
        <InputGroup>
          <InputGroupInput
            name={UI.LABELS.name}
            placeholder={UI.PLACEHOLDERS.typeHere}
          />
          <InputGroupAddon align="inline-end">
            {isPending && <Spinner />}
          </InputGroupAddon>
        </InputGroup>
        <Button type="submit" disabled={isPending}>
          {UI.BUTTONS.save}
        </Button>
      </form>
      <span>
        {UI.LABELS.saved}: {name}
      </span>
    </CardContent>
  );
};
