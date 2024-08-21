import { RssIcon } from 'lucide-react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/ui/button'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: Readonly<{ article: ArticleWithSlug }>) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Musings on software, security, and the world."
      intro="All of my long-form thoughts on what I'm learning, what I'm building, and what I'm thinking about. I hope you find something interesting here."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
      <Button href="/feed.xml" className="mt-16" variant="transparent">
        <RssIcon className="mr-2 inline-block h-6 w-6 text-teal-500" />
        <span className="font-semibold text-teal-500">RSS feed</span>
      </Button>
      <p className="mt-16 max-w-3xl text-sm text-zinc-600 dark:text-zinc-400">
        I <i>used</i> to write about security and CTFs on{' '}
        <Link
          className="font-semibold text-teal-500"
          href="https://infosec.zeyu2001.com"
        >
          infosec.zeyu2001.com
        </Link>
        . and{' '}
        <Link
          className="font-semibold text-teal-500"
          href="https://ctf.zeyu2001.com"
        >
          ctf.zeyu2001.com
        </Link>
        . These will remain up so that backlinks to popular writeups don&apos;t
        break, but this blog is where I&apos;ll be posting new content.
      </p>
    </SimpleLayout>
  )
}
