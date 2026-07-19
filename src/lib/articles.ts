import glob from 'fast-glob'

interface Article {
  title: string
  description: string
  author: string
  date: string
}

export interface ArticleWithSlug extends Article {
  slug: string
  external?: string
}

// Writing published elsewhere, merged into the article lists by date.
const externalArticles: Array<ArticleWithSlug> = [
  {
    title: 'Closing the Loop: Evaluating and Improving Replit Agent at Scale',
    description:
      'How evaluation at Replit went from launch check to improvement loop — learning from production traces to ship a better Replit Agent, week over week.',
    author: 'Daniel Furman',
    date: '2026-06-23',
    slug: 'evaluating-and-improving-agent-at-scale',
    external:
      'https://replit.com/blog/evaluating-and-improving-agent-at-scale',
  },
]

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return [...articles, ...externalArticles].sort(
    (a, z) => +new Date(z.date) - +new Date(a.date),
  )
}
