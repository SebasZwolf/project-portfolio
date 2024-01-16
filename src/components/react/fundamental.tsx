import { createElement as h } from 'react';

export type p_base = {
	children? : any,
  className? : string,
  style? : any,
}

export type p_Title = { level: number } & p_base;
export function Title({ children, level, ...p }: p_Title) {
	return h(`h${level}`, p, children);
}
