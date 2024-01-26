import { createElement as h, type FC, type ReactNode, } from 'react';

export type p_Title = { 
	level: number;
	children? : ReactNode;
} & Record<string, unknown>;
 
export const Title : FC<p_Title> = function({ children, level, ...p }) {
	return h(`h${level}`, p, children);
}
