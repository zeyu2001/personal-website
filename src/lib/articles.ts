import glob from 'fast-glob'

interface Article {
  title: string
  description: string
  author: string
  date: string

  // Whether to list this article in the blog index and RSS feed
  // Hidden articles are still accessible via their slug
  hidden?: boolean
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(articleFilename: string): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/blog/${articleFilename}`)) as {
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
    cwd: './src/app/blog',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles
    .filter((article) => !article.hidden)
    .sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
