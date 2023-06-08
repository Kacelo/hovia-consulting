import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
  Image,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
const phoneNumber = "+264817759537";
function ContactUs() {
  const openWhatsApp = () => {
    const message = "Hello, I would like to book an appointment.";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  const email = "hoviaconsult@iway.na";
  const subject = "Enquiry";
  const body = "";
  const composeEmail = () => {
    const url = `mailto:${encodeURIComponent(
      email
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };
  const telephoneNumber = +26461221463;
  const openPhoneDialer = () => {
    const url = `tel:${encodeURIComponent(telephoneNumber)}`;
    window.location.href = url;
  };
  const address =
    "No. 96, Columbia Street, Dorado Park Ext. , Windhoek, Namibia";
  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <Box textAlign="center" mt={10}>
        <Heading fontSize="2xl" fontWeight="bold" mb={4}>
          Need assistance or have any questions?
        </Heading>
        <Text fontSize="lg" mb={6}>
          We are here to help! Contact us today for prompt and friendly support.
        </Text>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={10}
        m={20}
        textAlign={"center"}
      >
        <SimpleGrid columns={{ base: 1 }} as={"button"} onClick={openWhatsApp}>
          <Text fontSize="lg" mb={6}>
            Send us a message
          </Text>
          <Image
            src="/images/contact-us/Print_Stacked_Green.png"
            alt=""
            height={100}
            width={20}
            style={{ width: "auto", margin: "auto", marginBottom: "2em" }}
          ></Image>
        </SimpleGrid>
        <SimpleGrid
          columns={{ base: 1 }}
          as={"button"}
          onClick={openPhoneDialer}
        >
          <Text fontSize="lg" mb={6}>
            Give us a call
          </Text>
          <Image
            src="/images/contact-us/iphone.png"
            alt=""
            height={20}
            width={20}
            style={{ width: "auto", margin: "auto" }}
          ></Image>
          <Text fontSize="lg" mb={6} mt={5}>
            +{telephoneNumber}{" "}
          </Text>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1 }} as={"button"} onClick={composeEmail}>
          <Text fontSize="lg" mb={6}>
            Send us an email
          </Text>
          <FaEnvelope size="sm" style={{ width: "4em", margin: "auto" }} />
          <Text> {email}</Text>
        </SimpleGrid>
        <SimpleGrid
          columns={{ base: 1 }}
          as={"button"}
          onClick={openGoogleMaps}
        >
          <Text fontSize="lg" mb={6}>
            Find Us Here
          </Text>
          <Image
            src="/images/contact-us/location-pin.png"
            alt=""
            height={20}
            width={20}
            style={{ width: "auto", margin: "auto" }}
          ></Image>
          <Text> No. 96, Columbia Street, Dorado Park Ext. 1, Windhoek</Text>
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}

export default ContactUs;
