import React from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Works from '@/components/Works'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Team from '@/components/Team'

function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <Services />
      <Works />
      <About />
      <Team />
      <Footer />
    </div>
  )
}

export default page