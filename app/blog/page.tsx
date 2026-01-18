import type { Metadata } from 'next'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stay updated with the latest insights, tutorials, and industry trends from Avulex Technology. Explore our tech blog for expert knowledge and innovation updates.',
  keywords: [
    'Avulex blog',
    'tech blog',
    'technology insights',
    'tutorials',
    'industry trends',
    'software development',
    'innovation',
    'tech articles'
  ],
  openGraph: {
    title: 'Blog - Avulex Technology',
    description: 'Stay updated with the latest insights, tutorials, and industry trends from Avulex Technology. Explore our tech blog for expert knowledge and innovation updates.',
    url: '/blog',
    images: [
      {
        url: '/Avulex-white-01.png',
        width: 1200,
        height: 630,
        alt: 'Avulex Technology Blog',
      },
    ],
  },
  twitter: {
    title: 'Blog - Avulex Technology',
    description: 'Stay updated with the latest insights, tutorials, and industry trends from Avulex Technology.',
  },
}

function Page() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
          Discover the latest insights, tutorials, and industry trends from our team of experts. 
          Stay ahead in the rapidly evolving world of technology.
        </p>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Page