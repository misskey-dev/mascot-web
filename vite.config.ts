import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [{
			find: '@lib/',
			replacement: __dirname + '/lib/'
		}]
	},
	publicDir: 'assets',
	build: {
		assetsDir: 'built'
	},
  plugins: [vue()]
})
