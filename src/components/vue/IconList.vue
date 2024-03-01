<script lang="ts" setup>
import { useSlots, type PropType } from 'vue';

import { icons } from '../../util/const';
type t_icon = typeof icons[keyof typeof icons];


defineOptions({
	inheritAttrs : false,
})

const p = defineProps({
	icons : {
		type : Array as PropType<t_icon[]>
	}
});


</script>

<template>
	<ul class="c-ul-project-tags">
		<li v-for="i in p.icons"
			v-bind="$attrs"
			:style="`--icon-color: ${i.color}`">
			<svg viewBox="0 0 24 24" width="28">
				<title>{{ i.label }}</title>
				<use stroke="currentcolor" :href="`#c-icon-tag-${i.icon}`"/>	
			</svg>	
		</li>
	</ul>
</template>

<style>
& .c-ul-project-tags {
	& {
		@apply flex flex-row flex-nowrap gap-2 items-start justify-end;
	}

	& > li {
		@apply rounded-md border border-current aspect-square grid place-items-center;
		border : 1px solid var(--hierarchy-0);
		stroke: currentColor;
		transition: background-color .2s, border-color .2s;
	}
	
	& > li:hover {
		background-color: var(--icon-color);
		border-color: var(--icon-color);
	}
	& > li:hover > svg { filter: invert(1); }
}
</style>