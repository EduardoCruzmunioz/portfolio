import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    coverImage: z.string().optional(),
    category: z.enum(['web', 'mobile', 'console', 'desktop']).default('web'),
    featured: z.boolean().default(false),
    order: z.number().default(0)
  })
});

export const collections = {
  'projects': projectsCollection,
};
