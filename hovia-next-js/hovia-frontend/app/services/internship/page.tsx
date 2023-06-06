"use client"

import React from 'react'
import ServicesHero from '@/app/components/ServicesHero'

const individualsData = 
    {
        title: "Interns",
        text: `Through Hovia, a platform has been created to assist final year university/ college students
        to enhance their skills and develop their potential in preparation for the job market, by
        providing practical on-the-job training and job attachments opportunities, under the expertise
        that Hovia holds. Interns will be given a minimum of 6 months duration with an opportunity
        for extension. During the 6 months of internship certain areas will be developed through
        Hovia projects.`,

        imageSrc: "/images/services/intern2.jpg"
    }

function Internships() {
  return (
    <div>
        <ServicesHero title={individualsData.title} text={individualsData.text} imageSrc={individualsData.imageSrc} buttonWording='Apply Now'/>
    </div>
  )
}

export default Internships;