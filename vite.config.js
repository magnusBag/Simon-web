import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [
		svelte({
			/* plugin options */
		})
	], build: {
		outDir: 'docs',
	},
	
});