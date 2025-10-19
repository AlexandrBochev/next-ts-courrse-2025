"use client";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { UI } from "@/constants";
import { CloudOff } from "lucide-react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CloudOff />
        </EmptyMedia>
        <EmptyTitle>{UI.MESSAGES.ERRORS.somethingWentWrong}</EmptyTitle>
        <EmptyDescription>
          {error?.message || UI.MESSAGES.ERRORS.unknownError}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button onClick={() => reset()} variant="outline" size="sm">
          {UI.BUTTONS.tryAgain}
        </Button>
      </EmptyContent>
    </Empty>
  );
}
