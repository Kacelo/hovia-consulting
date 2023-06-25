import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import Image from "next/image";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
  imageSrc: string;
}

const Card = ({ heading, description, icon, href, imageSrc }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px", lg: "320px" }}
      w={"full"}
      borderWidth="0px"
      borderRadius="sm"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          style={{ width: "-webkit-fill-available !important" }}
          w={236}
          h={236}
          align={"center"}
          justify={"center"}
          color={"white"}
          // rounded={'full'}
          bg={"#E6E6E6"}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt=""
              height={236}
              style={{ width: "-webkit-fill-available !important" }}
              width={236}
            />
          ) : (
            ""
          )}{" "}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Link href={href}>
          <Button
            bg={"#008000"}
            color={"white"}
            size={"sm"}
            _hover={{ bg: "green.400" }}
          >
            {" "}
            Learn more
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default function Services() {
  return (
    <Box p={2} marginTop={"20"} id="ourServices">
      <Stack spacing={1} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          OUR SERVICES
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          {/* Welcome to our vibrant world of beauty and cosmetics! At our exceptional website, we offer a delightful array of services and products designed to elevate your personal style and enhance your natural charm. Step into our enchanting realm and discover a harmonious fusion of artistry, expertise, and top-notch customer care. */}
        </Text>
      </Stack>

      <Container maxW={"150ch"} mt={{ base: "6em", sm: "10em" }}>
        <Flex flexWrap="wrap" gridGap={12} justify="center">
          <Card
            heading={"SERVICES FOR INDIVIDUALS"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={`Preparing individuals, students with the essential skills for the future requires all
                Educators to create a collaborative culture for learning that sparks curiosity and
                creativity. We explore with tools that will boost student engagement, ignite creativity,
                and foster collaborative learning and development!`}
            href={"/services/individuals"}
            imageSrc="/images/services/grad.jpg"
          />
          <Card
            heading={"SERVICES FOR ORGANIZATIONS"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={`We help Education Professional Associations and Academic Institutions, scale into
                new and untapped markets, improve retention and market viability, build brand
                awareness, enhance brand identity, and improve quality. Our objective is to help
                institutions / organizations thrive in their educational business operations, to achieve
                optimal efficiency and productivity with our customized services, while focusing on
                their end goal.`}
            href={"/services/organizations"}
            imageSrc="/images/services/institution.jpg"
          />
          <Card
            heading={"INTERN PROGRAM"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={`Benefits of our Intern Program:
                Through Hovia, a platform has been created to assist final year university/ college students
                to enhance their skills and develop their potential in preparation for the job market, by
                providing practical on-the-job training and job attachments opportunities, under the expertise
                that Hovia holds. Interns will be given a minimum of 6 months duration with an opportunity
                for extension. During the 6 months of internship certain areas will be developed through
                Hovia projects.`}
            href={"/services/internship"}
            imageSrc="/images/services/intern2.jpg"
          />
        </Flex>
      </Container>
    </Box>
  );
}
