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
      routes: [
        '/',
        '/new',
        '/used',
        '/new/0/nintendo-switch-oled',
        '/new/1/nintendo-switch-v2',
        '/new/2/nintendo-switch-lite',
        '/used/0/nintendo-switch-oled-white',
        '/used/1/nintendo-switch-oled-blue-red',
        '/used/2/nintendo-switch-v2',
        '/used/3/nintendo-switch-lite-grey',
        '/used/4/nintendo-switch-lite-blue',
        '/used/5/nintendo-switch-lite-yellow',
        '/used/6/nintendo-switch-lite-turquoise',
        '/used/7/nintendo-switch-lite-coral',
      ],
      staticDir: path.join(__dirname, 'dist'),
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
