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
      routes: ['/', '/new', '/used', '/new/detailed-post/*', '/used/detailed-post/*'],
      staticDir: path.join(__dirname, 'dist'),
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
