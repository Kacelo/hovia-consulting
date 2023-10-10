"use client";

import React from "react";
import ServicesHero from "@/app/components/ServicesHero";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import PriceList from "@/app/components/PriceList";

const individualsData = {
  title: "Organizations",
  text: `We help Education Professional Associations and Academic Institutions, scale into
        new and untapped markets, improve retention and market viability, build brand
        awareness, enhance brand identity, and improve quality. Our objective is to help
        institutions / organizations thrive in their educational business operations, to achieve
        optimal efficiency and productivity with our customized services, while focusing on
        their end goal.`,

  imageSrc: "/images/services/institution.jpg",
};
const mentorIntro = "EDUCATION QUALITY ASSURANCE SERVICES";
const mentorship = [
  {
    id: 1,
    title: `Educational Business Start Up- Facilitation`,
    text: ``,
  },
  {
    id: 2,
    title: "Institutional Accreditations & Audits",
    text: ``,
  },
  {
    id: 3,
    title: "Academic Programme/Course Accreditations & Re-accreditations",
    text: ``,
  },
  {
    id: 4,
    title: `Qualification Registrations on the National Qualification Framework (NQF)`,
    text: ``,
  },
  {
    id: 5,
    title: "Curriculum Development & Reviews",
    text: ``,
  },
  {
    id: 6,
    title: "Industry Stakeholder Engagement Facilitation",
    text: ``,
  },
  // Add more hairstyle objects as needed
];

function Organizations() {
  return (
    <div>
      <ServicesHero
        title={individualsData.title}
        text={individualsData.text}
        imageSrc={individualsData.imageSrc}
        buttonWording="Book appointment"
      />
      <Box p={4} mt={10} mb={10}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading color={""} mb={5} fontSize={{ base: "3xl", md: "5xl" }}>
            EDUCATION PROJECTS MANAGEMENT{" "}
          </Heading>
        </Stack>

        <Container maxW={"6xl"} mt={10}>
          <Text>
            We manage projects in the education industry. As Educational
            Strategist we work alongside educational leaders, teachers, and
            students in advisory roles to execute projects, implement change, to
            create optimal learning environments. Whether it’s coordinating a
            new curriculum rollout, organizing a student field trip, or starting
            up an education organization, we facilitate the whole process of
            planning, organizing, directing, controlling, evaluating, and
            reviewing of activities of the education project, by utilizing human
            and material resources effectively and efficiently to accomplish
            functions of teaching, learning and development.
          </Text>
        </Container>
      </Box>
      <PriceList hairstyles={mentorship} heading={mentorIntro} />
      <Box p={4} mt={10}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading color={""} mb={5} fontSize={{ base: "3xl", md: "5xl" }}>
            EDUCATION DATA MANAGEMENT
          </Heading>
        </Stack>

        <Container maxW={"6xl"} mt={10} mb={10}>
          <Text>
            HEC helps Institutions/ Organizations with Data Management including
            Data Collection, Analysis & Reporting, as well as Database
            Management to support productivity, efficiency, and business
            decision-making with ease. With reliable, up-to-date data,
            Organizations can respond more efficiently to market changes and
            customer needs. We help institution minimize potential errors, by
            establishing processes and policies for data usage and building
            trust in the data being used, to make decisions across your
            organizations.
          </Text>
        </Container>
      </Box>
    </div>
  );
}

export default Organizations;
