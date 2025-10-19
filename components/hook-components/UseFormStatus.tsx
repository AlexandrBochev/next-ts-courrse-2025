"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { UI } from "@/constants";
import { useState } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {UI.BUTTONS.submit}
      {pending && <Spinner />}
    </Button>
  );
};

export const UseFormStatus = () => {
  const [email, setEmail] = useState("");

  const submitAction = async (formData: FormData) => {
    const email = String(formData.get(UI.LABELS.email));
    setEmail(email);
    await new Promise((r) => setTimeout(r, 800));
  };

  return (
    <CardContent className="space-y-2">
      <form action={submitAction} className="flex items-center gap-2">
        <Input
          name={UI.LABELS.email}
          type={UI.LABELS.email}
          placeholder={UI.LABELS.email}
        />
        <SubmitButton />
      </form>
      <span>
        {UI.LABELS.email}: {email}
      </span>
    </CardContent>
  );
};
