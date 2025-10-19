import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string().url(),
  gitHubUrl: z.string().url(),
  img: z.union([z.string().url(), z.string().regex(/^\.?\/.+/)]),
});

export const ProjectsSchema = z.array(ProjectSchema);
export type ProjectType = z.infer<typeof ProjectSchema>;