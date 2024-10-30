import { defineCollection, z } from 'astro:content';

import { icons as tags } from '../util/const'

type k_tags = keyof typeof tags;
const tagarr = new Set(Object.keys(tags)) as Set<k_tags>;

const pro_img_folder = "../../assets/projects/";

const projects = defineCollection({
	type: 'data',
	schema: ({ image }) => z.object({
		title: z.string(),
		descr: z.string(),
		link : z.string().optional(),
		repo : z.string().optional(),
		stars : z.number().default(5),
		img: z.string().transform(s => pro_img_folder.concat(s)).pipe(image()),
		tags : z.string()
			.refine(e => tagarr.has(e as k_tags), e => ({ message : `'${e}' tag not recognized` }))
			.array().transform(a => a.map(e => tags[e as k_tags] )),
	})
});

export const collections = { projects };
