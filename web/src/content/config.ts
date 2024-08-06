import { defineCollection, z } from "astro:content";

const resumes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    languageLabel: z.string(),
    language: z.union([z.literal("en"), z.literal("pt-br")]),
  }),
});

export const collections = { resumes };
