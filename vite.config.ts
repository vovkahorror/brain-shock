import * as path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import vitePrerender from 'vite-plugin-prerender'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    nodePolyfills({
      protocolImports: true,
    }),
    svgr(),
    vitePrerender({
      routes: ['/', '/new', '/used', '/new/*/*', '/used/*/*'],
      staticDir: path.join(__dirname, 'dist'),
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
