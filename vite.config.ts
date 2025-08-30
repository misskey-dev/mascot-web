import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [{
			find: '@lib/',
			replacement: __dirname + '/lib/'
		}]
	},
	base: '/mascot-web/',
	publicDir: 'assets',
	build: {
		assetsDir: 'built'
	},
})
