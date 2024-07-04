import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { siteUrl } from './common/consts/links'
import { formatStringToUrlFormat } from './common/helpers/formatStringToUrlFormat'
import { postsData } from './data/posts-data'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const generateSitemap = () => {
  const urls = []
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

  fs.writeFileSync(path.resolve(__dirname, 'sitemap.xml'), sitemapContent)
}
