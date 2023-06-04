"use client"
import Image from 'next/image'
import HoviaHero from './components/Hero'
import WhoWeAre from './components/Intro'
import Services from './components/OurServices'
export default function Home() {
  return (
   
<>
<HoviaHero />
<WhoWeAre />
<Services />
</>
  )
}
