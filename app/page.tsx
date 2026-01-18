import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Works from '@/components/Works'
import About from '@/components/About'
import Team from '@/components/Team'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Avulex Technology delivers cutting-edge software solutions and innovative technology services to help businesses thrive in the digital age.',
  keywords: [
    'Avulex Technology',
    'software development',
    'tech solutions',
    'innovation',
    'digital transformation',
    'web development',
    'mobile apps',
    'home'
  ],
  openGraph: {
    title: 'Avulex Technology - Innovative Tech Solutions',
    description: 'Avulex Technology delivers cutting-edge software solutions and innovative technology services to help businesses thrive in the digital age.',
    url: '/',
    images: [
      {
        url: '/Avulex-white-01.png',
        width: 1200,
        height: 630,
        alt: 'Avulex Technology Home',
      },
    ],
  },
  twitter: {
    title: 'Avulex Technology - Innovative Tech Solutions',
    description: 'Avulex Technology delivers cutting-edge software solutions and innovative technology services to help businesses thrive in the digital age.',
  },
}

function page() {
  return (
    <div>
      <Hero />
      <Services />
      <Works />
      <About />
      <Team />
      <ScrollToTop />
    </div>
  )
}

export default page