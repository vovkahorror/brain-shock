const fs = require('fs')
const path = require('path')
const { siteUrl } = require('@/common/consts/links')
const { postsData } = require('@/data/posts-data')
const { formatStringToUrlFormat } = require('@/common/helpers/formatStringToUrlFormat')

const generateSitemap = () => {
  const urls = []
  const date = new Date().toISOString()

  urls.push(
    `<url><loc>${siteUrl}/</loc><lastmod>${date}</lastmod><changefreq>Main</changefreq><priority>1.0</priority></url>`
  )
  urls.push(
    `<url><loc>${siteUrl}/new</loc><lastmod>${date}</lastmod><changefreq>New consoles</changefreq><priority>0.8</priority></url>`
  )
  urls.push(
    `<url><loc>${siteUrl}/used</loc><lastmod>${date}</lastmod><changefreq>Used consoles</changefreq><priority>0.8</priority></url>`
  )

  for (const [key, posts] of Object.entries(postsData)) {
    posts.forEach((post, index) => {
      const formattedTitle = formatStringToUrlFormat(post.title)
      const url = `${siteUrl}/${key}/${index}/${formattedTitle}`

      urls.push(
        `<url><loc>${url}</loc><lastmod>${date}</lastmod><changefreq>${post.title}</changefreq><priority>0.6</priority></url>`
      )
    })
  }

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('')}
  </urlset>`

  fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), sitemapContent)
}

generateSitemap()
