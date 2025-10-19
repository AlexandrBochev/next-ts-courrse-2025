"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CodeXml } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

type CodeInDialogProps = {
  code: Promise<string>;
  title: string;
};

export const CodeInDialog = ({ code, title }: CodeInDialogProps) => {
  const [open, setOpen] = useState(false);
  if (!code) return;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <CodeXml className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[60vw] overflow-hidden">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[80vh] rounded-md border">
          <pre className="p-4 text-sm leading-6 whitespace-pre overflow-x-auto">
            <code>{code}</code>
          </pre>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
