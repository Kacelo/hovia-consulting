"use client"

import React from 'react'
import ServicesHero from '@/app/components/ServicesHero'

const individualsData = 
    {
        title: "Individuals",
        text: `Preparing individuals, students with the essential skills for the future requires all
        Educators to create a collaborative culture for learning that sparks curiosity and
        creativity. We explore with tools that will boost student engagement, ignite creativity,
        and foster collaborative learning and development!`,

        imageSrc: "/images/services/grad.jpg"
    }

function Individuals() {
  return (
    <div>
        <ServicesHero title={individualsData.title} text={individualsData.text} imageSrc={individualsData.imageSrc}/>
    </div>
  )
}

export default Individuals;