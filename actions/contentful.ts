"use server";
import { HooksSchema, ProjectsSchema } from '@/schemas';
import { createClient, Asset } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  environment: process.env.CONTENTFUL_ENVIRONMENT!,
  accessToken: process.env.CONTENTFUL_CDA_TOKEN!
});

export const getProjects = async () => {
  const response = await client.getEntries({
    content_type: 'projects',
    select: ["fields.title", "fields.url", "fields.gitHubUrl", "fields.image"],
  });

  const projects = response.items.map((project) => {
    const { title, url, gitHubUrl, image } = project.fields;
    const id = project.sys.id;
    const img = `https:${(image as Asset)?.fields?.file?.url}`;
    return { id, title, url, gitHubUrl, img };
  });

  return ProjectsSchema.parse(projects);
};

export const getHooks = async () => {
  const response = await client.getEntries({
    content_type: 'hooks',
    select: ["fields.title", "fields.description", "fields.hookName"],
  });

  const hooks = response.items.map((hook) => {
    const { title, description, hookName } = hook.fields;
    const id = hook.sys.id;
    return { id, title, description, hookName };
  });

  return HooksSchema.parse(hooks);
}