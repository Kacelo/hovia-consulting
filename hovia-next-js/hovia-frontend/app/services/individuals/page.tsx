"use client";

import React from "react";
import ServicesHero from "@/app/components/ServicesHero";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
  Flex,
  Container,
  Text,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import PriceList from "@/app/components/PriceList";
const individualsData = {
  title: "Individuals",
  text: `Preparing individuals, students with the essential skills for the future requires all
        Educators to create a collaborative culture for learning that sparks curiosity and
        creativity. We explore with tools that will boost student engagement, ignite creativity,
        and foster collaborative learning and development!`,

  imageSrc: "/images/services/grad.jpg",
};
const eldp = "TRAINING & DEVELOPMENT";
const hairstylesData = [
  {
    id: 1,
    title: "Educational Leadership Development Programme (ELDP)",
    text: ` Our Teach the Teacher / Train the Trainer Programme aims
    to equip teachers and trainers with presentation,
    management, and soft skills, as well as classroom
    etiquette, effective communication, leaner-teacher
    relationship building, facilitation, skills development
    and much more!`,
  },
  {
    id: 2,
    title: "Skills Development Programme (SDP)",
    text: `We focus on developing professional skills sets, for
    improvement, proficiency, and productivity needed to
    thrive in the business world. We developed customized
    short learning courses that pay particular attention to
    immediate and adequate learning for the job market.`,
  },
  {
    id: 3,
    title: "  Personal & Professional Development Programme (PPDP)",
    text: `  We focus on personal and professional development of
    individuals, according to their specific needs and
    requirements, for personal growth, and for them to succeed
    professionally in their careers.`,
  },
  {
    id: 4,
    title: "Personal &amp; Professional Development Programme (PPDP)",
    text: `We focus on personal and professional development of individuals, according to their
    specific needs and requirements, for personal growth, and for them to succeed
    professionally in their careers.`,
  },
  // Add more hairstyle objects as needed
];
const mentorIntro = "EDUCATIONAL COACHING & MENTORSHIP";
const mentorship = [
  {
    id: 1,
    title: `Coaching & Mentorship`,
    text: `Our Mentors, with their expertise guide and lead, students throughout their studies,
    providing needed educational support to help them achieve their career goals. We
    motivate and empower individuals to become better learners. We do Team Building,
    Study Groups facilitation etc.`,
  },
  {
    id: 2,
    title: "Career Guidance & Counselling",
    text: `We provide career guidance and counselling, with our expert councillors’ helping
    students and learners in finding their passions, making the right career choices, and
    dealing with life’s challenges. We focus on Professional Progression, Personal
    Development and Wellness of our clients.`,
  },
  {
    id: 3,
    title: "Educational Support Programme",
    text: `Our Tutoring Programme is designed to cater for primary and secondary education
    Learners in all grades, as well as Tertiary education individuals who want to improve
    on their academic performance. We offer specialized tutoring services where we
    identify learning difficulties by performing detailed educational evaluations including
    psychometric assessments, and target problem areas for best results, with our highly
    trained professionals. Performance is key in our programme!`,
  },
  // Add more hairstyle objects as needed
];

function Individuals() {
  return (
    <div>
      <ServicesHero
        title={individualsData.title}
        text={individualsData.text}
        imageSrc={individualsData.imageSrc}
        buttonWording="Book appointment"
      />
      <Box p={4} mt={10}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading color={""} mb={5} fontSize={{ base: "3xl", md: "5xl" }}>
            TALENT ACQUISITION MANAGEMENT
          </Heading>
        </Stack>

        <Container maxW={"6xl"} mt={10}>
          <Text>
            Through our Talent Acquisition Management Programme, Hovia Talent
            Pool (HTP) we acquire knowledge, skills, abilities, and growth
            through training and development. We source talent, assess skills
            and qualifications, manage candidate strengths, match the right
            skills sets and onboard / place right candidates with the right
            organizations / companies. We attract, engage, and retain talent
            through our talent acquisition expertise, and avail the best talent
            to the hiring team at the right time. With our programme, the
            candidates have more chance of being hired in the right positions,
            with pay equity. The goal of our candidate referral system is to
            make inbound referrals of more sustainable and more reliable source
            of candidates to employers, hence, tackling unemployment in Namibia.
          </Text>
        </Container>
      </Box>
      <PriceList hairstyles={hairstylesData} heading={eldp} />
      <PriceList hairstyles={mentorship} heading={mentorIntro} />
      <Box p={4} mt={10}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading color={""} mb={5} fontSize={{ base: "3xl", md: "5xl" }}>
            EDUCATION FUNDING MANAGEMENT
          </Heading>
        </Stack>

        <Container maxW={"6xl"} mt={10}>
          <Text>
            Access to inclusive and quality education is a fundamental right for
            all… Hovia will help make your academic journey possible by securing
            financial support for you. We secure funding for Scholars and
            Individuals in the form of Scholarships, Loans (Short term / Long
            term) for the purpose of Registration / Tuition Fees etc. Contact us
            for more info!
          </Text>
        </Container>
      </Box>
    </div>
  );
}

export default Individuals;
