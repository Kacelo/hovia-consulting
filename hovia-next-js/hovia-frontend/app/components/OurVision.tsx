import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
}

const Feature = ({ title, text }: FeatureProps) => {
  return (
    <Stack maxW={{ base: "350px", md: "575px", lg: "520px" }} p={5}>
      <Text
        fontWeight={600}
        fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
      >
        {title}
      </Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};
const Intro = ({ title, text }: FeatureProps) => {
  return (
    <Stack maxW={{ base: "350px", md: "720px", lg: "720px" }} pb={10} pt={5}>
      <Text
        fontWeight={600}
        fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
      >
        {title}
      </Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function OurVision() {
  return (
    <Container maxW={"8xl"} p={5}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={1}>
        <Intro
          title={"WHO WE ARE"}
          text={
            "HEC is an Educational Consulting Company that offers a variety of Educational Services to Learner, Students, Teachers, Trainers, Parents & amp; Educational Institutions. We specialize in Talent Management, Education Change Management, Educational Coaching, Training and Education Quality Assurance Services, among others."
          }
        />
        <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={1}>
          <Feature
            title={"OUR VISION"}
            text={`To be the preferred educational consultants, academically empowering professionals
            through our consulting and training programmes in the effort to create future leaders.`}
          />
          <Feature
            title={"OUR MISSION"}
            text={`In our Training and Consulting Services we continuously strive to apply best practices in the
            Competent Education and Training Industry. We are driven by integrity, personal
            accountability, professional service, and passion for the growth and development of
            Namibians.`}
          />
          <Feature
            title={"OUR VALUES"}
            text={`Transparency, Social Responsibility, Accountability, Teamwork, Integrity, and Relevance.`}
          />
          <Feature
            title={"OUR SLOGAN"}
            text={`Empowering through Education!`}
          />
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  );
}
