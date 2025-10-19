import z from "zod";

export const HookSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  hookName: z.string(),
});

export const HooksSchema = z.array(HookSchema);
export type HookType = z.infer<typeof HookSchema>;