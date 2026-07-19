import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.danielryanfurman.com',
  ),
  title: {
    template: '%s - Daniel Ryan Furman',
    default:
      'Daniel Ryan Furman',
  },
  description:
    'AI engineer at Replit working on agent evaluation. Writing about LLMs, agents, and applied machine learning.',
  openGraph: {
    title: 'Daniel Ryan Furman',
    description:
      'AI engineer at Replit working on agent evaluation. Writing about LLMs, agents, and applied machine learning.',
    url: '/',
    siteName: 'Daniel Ryan Furman',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/portrait.jpg', width: 2799, height: 3963 }],
  },
  twitter: {
    card: 'summary',
    title: 'Daniel Ryan Furman',
    description:
      'AI engineer at Replit working on agent evaluation. Writing about LLMs, agents, and applied machine learning.',
    creator: '@dryanfurman',
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
