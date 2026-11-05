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
    title: 'ViBench 2.0: A Benchmark for Long-Horizon Software Building',
    description:
      'A benchmark for long-horizon software building: seventeen full-stack apps, 241 feature requests, and 544 test plans, showing that even top models only ship fully working products 49–65% of the time.',
    author: 'Daniel Furman',
    date: '2026-10-28',
    slug: 'vibench-2-long-horizon-software-benchmark',
    external:
      'https://frontier.replit.com/vibench-2-long-horizon-software-benchmark/',
  },
  {
    title: 'Free the models: Harness design at the frontier',
    description:
      'Why letting frontier models choose their own effort level, handoffs, and subagents beats prescriptive routing — the bitter lesson of harness design, applied to Replit Agent.',
    author: 'Daniel Furman',
    date: '2026-09-29',
    slug: 'free-the-models',
    external: 'https://frontier.replit.com/free-the-models/',
  },
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
