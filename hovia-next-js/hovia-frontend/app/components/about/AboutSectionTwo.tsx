import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
     {icon?  <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex> : ""}
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function WhoWeAre() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading
            textTransform={"uppercase"}
            color={"#000000"}
            fontWeight={600}
            fontSize={"2xl"}
            // bg={useColorModeValue("white", "white")}
            p={0}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
           WHO WE ARE

          </Heading>
          {/* <Heading>ABOUT US</Heading> */}
          <Text color={"gray.500"} fontSize={"lg"}>
          HEC is an Educational Consulting Company that offers a variety of Educational Services 
          to Learner, Students, Teachers, Trainers, Parents & amp; Educational Institutions. 
          We specialize in Talent Management, Education Change Management, Educational Coaching, 
          Training and Education Quality Assurance Services, among others.{" "}
          </Text>
          {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={1}>
              <Button
                rounded={'full'}
                bg={'#008000'}
                color={'white'}
                _hover={{
                  bg: 'white.500',
                }}>
                Learn More
              </Button>
            </Stack> */}
          {/* <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Text color={"gray.500"} fontSize={"lg"}>
            We offer the following services
          </Text>
            <Feature
             
              text={"Talent Acquisition Management"}
            />
            <Feature
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Training & Development"}
            />
            <Feature
             
              text={"Educational Coaching & Mentorship"}
            />
            <Feature
            
              text={"Education Funding Management"}
            />
            <Feature
              
              text={"Education Projects Management"}
            />
            <Feature
             
              text={"Education Quality Assurance Services"}
            />
            <Feature
             
              text={"Education Data Management"}
            />
          </Stack> */}
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "/images/teaching.png"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}