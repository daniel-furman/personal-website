import { type MetadataRoute } from 'next'

import { getAllArticles } from '@/lib/articles'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.danielryanfurman.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let articles = await getAllArticles()

  let articleEntries: MetadataRoute.Sitemap = articles
    .filter((article) => !article.external)
    .map((article) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified: new Date(article.date),
    }))

  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/projects`, lastModified: new Date() },
    { url: `${siteUrl}/articles`, lastModified: new Date() },
    { url: `${siteUrl}/tech`, lastModified: new Date() },
    ...articleEntries,
  ]
}
