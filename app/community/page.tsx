import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community',
  description: 'Join the Avulex Technology community. Connect with developers, share ideas, and collaborate on innovative tech solutions.',
  keywords: [
    'Avulex community',
    'developer community',
    'tech community',
    'collaboration',
    'networking',
    'innovation',
    'technology discussions'
  ],
  openGraph: {
    title: 'Community - Avulex Technology',
    description: 'Join the Avulex Technology community. Connect with developers, share ideas, and collaborate on innovative tech solutions.',
    url: '/community',
    images: [
      {
        url: '/Avulex-white-01.png',
        width: 1200,
        height: 630,
        alt: 'Avulex Technology Community',
      },
    ],
  },
  twitter: {
    title: 'Community - Avulex Technology',
    description: 'Join the Avulex Technology community. Connect with developers, share ideas, and collaborate on innovative tech solutions.',
  },
}

function Page() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Community</h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
          Join our vibrant community of developers, innovators, and tech enthusiasts. 
          Share ideas, collaborate on projects, and stay updated with the latest in technology.
        </p>
      </div>
    </div>
  )
}

export default Page