import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Avulex Technology - our mission, vision, values, and the passionate team behind innovative tech solutions that drive digital transformation.',
  keywords: [
    'about Avulex',
    'company mission',
    'tech company',
    'innovation team',
    'digital transformation',
    'software development company',
    'technology vision',
    'company values'
  ],
  openGraph: {
    title: 'About - Avulex Technology',
    description: 'Learn about Avulex Technology - our mission, vision, values, and the passionate team behind innovative tech solutions that drive digital transformation.',
    url: '/about',
    images: [
      {
        url: '/Avulex-white-01.png',
        width: 1200,
        height: 630,
        alt: 'About Avulex Technology',
      },
    ],
  },
  twitter: {
    title: 'About - Avulex Technology',
    description: 'Learn about Avulex Technology - our mission, vision, values, and the passionate team behind innovative tech solutions.',
  },
}

function Page() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Avulex Technology</h1>
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-center text-gray-600">
            We are a forward-thinking technology company dedicated to delivering innovative solutions 
            that empower businesses to thrive in the digital age.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-600">
                To bridge the gap between cutting-edge technology and real-world business needs, 
                creating solutions that drive growth and innovation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading technology partner for businesses seeking digital transformation 
                and sustainable growth through innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page