import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'

import { getAllArticles } from '@/lib/articles'

export async function GET(req: Request) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Zeyu (Zayne) Zhang',
    email: 'ping@analogue.computer',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Where I write about software engineering, computer security, and everything in between.',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  const articles = await getAllArticles()
  
  for (let article of articles) {
    const id = article.slug
    let url = String(new URL(`/blog/${id}`, req.url))
    let html = await (await fetch(url)).text()
    let $ = cheerio.load(html)

    let publicUrl = `${siteUrl}/blog/${id}`
    let articleElement = $('article').first()
    let title = articleElement.find('h1').first().text()
    let date = articleElement.find('time').first().attr('datetime')
    let content = articleElement.find('[data-mdx-content]').first().html()

    assert(typeof title === 'string')
    assert(typeof date === 'string')
    assert(typeof content === 'string')

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      content,
      author: [author],
      contributor: [author],
      date: new Date(date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
