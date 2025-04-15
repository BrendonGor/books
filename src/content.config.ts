// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const texts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/texts" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    sources: z.array(z.string().url()),
    recommenders: z.array(reference("recommenders")),
    categories: z.array(z.string()),
    image_url: z.string().url(),
  }),
});
const relations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/relations" }),
  schema: z.object({
    from: reference("texts"),
    to: reference("texts"),
    writer: z.string(),
  }),
});
const recommenders = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/recommenders" }),
  schema: z.object({
    title: z.string(),
    website: z.string().url().optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { texts, relations, recommenders };
