import * as path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import vitePrerender from 'vite-plugin-prerender'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    vitePrerender({
      routes: ['/', '/new', '/used', '/new/0/nintendo-switch-oled', '/new/1/nintendo-switch-v2'],
      staticDir: path.join(__dirname, 'dist'),
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
