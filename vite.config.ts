import * as fs from 'node:fs'
import * as path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import vitePrerender from 'vite-plugin-prerender'
import svgr from 'vite-plugin-svgr'

import { siteUrl } from './src/common/consts/links'
import { formatStringToUrlFormat } from './src/common/helpers/formatStringToUrlFormat'
import { postsData } from './src/data/posts-data'

const urls: string[] = []

const generateSitemap = () => {
  const date = new Date().toISOString()

  urls.push(
    `<url>
      <loc>${siteUrl}/</loc>
      <lastmod>${date}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>`
  )
  urls.push(
    `<url>
      <loc>${siteUrl}/new</loc>
      <lastmod>${date}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>`
  )
  urls.push(
    `<url>
      <loc>${siteUrl}/used</loc>
      <lastmod>${date}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>`
  )

  for (const [key, posts] of Object.entries(postsData)) {
    posts.forEach((post, index) => {
      const formattedTitle = formatStringToUrlFormat(post.title)
      const url = `${siteUrl}/${key}/${index}/${formattedTitle}`

      urls.push(
        `<url>
          <loc>${url}</loc>
          <lastmod>${date}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.6</priority>
        </url>`
      )
    })
  }

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('')}
    </urlset>`

  fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), sitemapContent)
}

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    {
      closeBundle: generateSitemap,
      name: 'vite-plugin-sitemap',
    },
    vitePrerender({
      routes: ['/', '/new', '/used', '/new/*/*', '/used/*/*'],
      staticDir: path.join(__dirname, 'dist'),
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
