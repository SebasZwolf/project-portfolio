export const screen_themes = {
	d : 'dark',
	l : 'light',
};

export const icons = {
	vue : {
		icon : 'vue',
		label : 'Vue.js',
		color : '#42b883',
	},
	react : {
		icon : 'react',
		label : 'React.js',
		color : '#61dafb',
	},
	tailwind : {
		icon : 'tailwind',
		label : 'Tailwind CSS',
		color : '#38bdf8',
	},
	css3 : {
		icon : 'css-3',
		label : 'CSS3',
		color : '#214ce5',
	},
	html5 : {
		icon : 'html-5',
		label : 'HTML5',
		color : '#e44d26',
	},
	js : {
		icon : 'js',
		label : 'JavaScript',
		color : '#f0dc4e',
	},
	ts : {
		icon : 'ts',
		label : 'TypeScript',
		color : '#3178c6',
	},
	astro : {
		icon : 'astro',
		label : 'Astro',
		color : 'var(--hierarchy-0)',
	},
	netlify : {
		icon : 'netlify',
		label : 'Netlify',
		color : '#32e6e2',
	},
	static : {
		icon : 'static-cms',
		label : 'Static CMS',
		color : '#6ec5e3',
	},
	node : {
		icon : 'node',
		label : 'NodeJS',
		color : '#339933',
	},
	socketio : {
		icon : 'socketio',
		label : 'Socket.io',
		color : 'var(--hierarchy-0)'
	}
} as const satisfies Record<string, { icon: string, label: string, color: string }> ;
