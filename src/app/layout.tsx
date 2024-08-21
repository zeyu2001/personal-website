import '@/styles/tailwind.css'

import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

export const metadata: Metadata = {
  title: {
    template: '%s | Zeyu (Zayne) Zhang',
    default: 'Zeyu (Zayne) Zhang - Software Engineer',
  },
  description:
    "I'm Zayne (or Zeyu, if you prefer mandarin), a software engineer with a background in computer security. I'm a Computer Science student at Cambridge, and I love to build things that make a difference.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-900">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
