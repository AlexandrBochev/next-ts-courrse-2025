import { getHooks } from "@/actions";
import { CodeInDialog } from "@/components/CodeInDialog";
import * as HookComponents from "@/components/hook-components";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HookType } from "@/schemas";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ComponentType } from "react";

export type HookName = keyof typeof HookComponents;

const getHookCode = async (hookName: HookType["hookName"]) => {
  return await readFile(
    path.join(process.cwd(), `./components/hook-components/${hookName}.tsx`),
    "utf8"
  );
};

export default async function HooksPage() {
  const hooks = await getHooks();

  return (
    <main className="main-container grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {hooks.map(({ id, title, description, hookName }) => {
        const Component = HookComponents[
          hookName as HookName
        ] as ComponentType<unknown>;
        return (
          <Card key={id} className="justify-between">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
              <CardAction>
                <CodeInDialog code={getHookCode(hookName)} title={title} />
              </CardAction>
            </CardHeader>
            <Component />
          </Card>
        );
      })}
    </main>
  );
}
