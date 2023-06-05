"use client"

import React from 'react'
import ServicesHero from '@/app/components/ServicesHero'

const individualsData = 
    {
        title: "Organizations",
        text: `We help Education Professional Associations and Academic Institutions, scale into
        new and untapped markets, improve retention and market viability, build brand
        awareness, enhance brand identity, and improve quality. Our objective is to help
        institutions / organizations thrive in their educational business operations, to achieve
        optimal efficiency and productivity with our customized services, while focusing on
        their end goal.`,

        imageSrc: "/images/services/institution.jpg"
    }

function Organizations() {
  return (
    <div>
        <ServicesHero title={individualsData.title} text={individualsData.text} imageSrc={individualsData.imageSrc}/>
    </div>
  )
}

export default Organizations;