import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({
    base: './src/content/proyectos',
    pattern: '**/*.md',
    generateId: ({ entry }) => entry.replace(/\\/g, '/').replace(/\/index\.md$/, '').replace(/\.md$/, ''),
  }),
  schema: ({ image }) => z.discriminatedUnion('type', [
    z.object({
      type: z.literal('section'),
      title: z.string().min(1),
      description: z.string().optional(),
    }),
    z.object({
      type: z.literal('project'),
      title: z.string().min(1),
      category: z.string().min(1),
      description: z.string().min(1),
      order: z.number().int().nonnegative().default(0),
      draft: z.boolean().default(false),
      technologies: z.array(z.string()).default([]),
      href: z.string().url().optional(),
      coverImage: image().optional(),
      galleryImages: z.array(z.object({
        image: image(),
        alt: z.string().min(1),
      })).max(3).default([]),
      moreDescription: z.string().optional(),
      pointDescription: z.array(z.string()).default([]),
      steps: z.array(z.object({
        stepTitle: z.string(),
        stepDescription: z.string(),
      })).default([]),
    }),
  ]),
});

export const collections = { proyectos };
