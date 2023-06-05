"use client"
import Image from 'next/image'
import HoviaHero from './components/Hero'
import WhoWeAre from './components/Intro'
import Services from './components/OurServices'
import PartnersSection from './components/OurPartners'
import HorizontalRule from './components/HorizontalRule'
const partnersData = [
  {
    id: 1,
    name: 'Part',
    logoUrl: '/images/partners/nqa.webp',
    websiteUrl: 'https://www.namqa.org/',
  },
  {
    id: 2,
    name: 'NCHE',
    logoUrl: './images/partners/nche-logo.png',
    websiteUrl: 'http://www.nche.org.na/',
  },
  {
    id: 3,
    name: 'NUST',
    logoUrl: './images/partners/Polytechnic_of_Namibia_logo.png',
    websiteUrl: 'https://www.nust.na/',
  },
  {
    id: 4,
    name: 'UNAM',
    logoUrl: './images/partners/AU+REC+logos+(76).png',
    websiteUrl: 'https://www.unam.edu.na/welcome',
  },
  {
    id: 5,
    name: 'NCHE',
    logoUrl: './images/partners/nta.png',
    websiteUrl: 'https://www.nta.com.na/',
  },
  {
    id: 6,
    name: 'WELWITCHIA HEALTH TRAINING CENTRE',
    logoUrl: './images/partners/wel.jpg',
    websiteUrl: 'https://welwitchia.com.na/',
  },

  // Add more partner objects as needed
];
export default function Home() {

  return (
   
<>
<HoviaHero />
<WhoWeAre />
<HorizontalRule />
<Services />
<HorizontalRule />
<PartnersSection partners={partnersData} />
</>
  )
}
