import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { ReactNode, useEffect } from "react";
import Image from "next/image";

const SocialButton = ({
  children,
  label,
  id,
}: // href,
{
  children: ReactNode;
  label: string;
  id: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      id={id}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const openFacbook = () => {
  const url = "https://www.facebook.com/profile.php?id=100093975039138";
  window.open(url, "_blank");
};
const openLinkedIn = () => {
  const url =
    "https://www.linkedin.com/company/hovia-educational-consultants-hec/";
  window.open(url, "_blank");
};
const openInstagram = () => {
  const url = "https://www.instagram.com/hoviaconsultants/";
  window.open(url, "_blank");
};

export default function SmallWithLogoLeft() {
  useEffect(() => {
    const handleFacebooklClick = () => {
      openFacbook();
    };

    const emailButton = document.getElementById("FacebookButton");
    if (emailButton) {
      emailButton.addEventListener("click", handleFacebooklClick);
      return () => {
        emailButton.removeEventListener("click", handleFacebooklClick);
      };
    }
  }, []);

  useEffect(() => {
    const handleLindkedInClick = () => {
      openLinkedIn();
    };

    const emailButton = document.getElementById("LinkedInButton");
    if (emailButton) {
      emailButton.addEventListener("click", handleLindkedInClick);
      return () => {
        emailButton.removeEventListener("click", handleLindkedInClick);
      };
    }
  }, []);

  useEffect(() => {
    const handleInstagramClick = () => {
      openInstagram();
    };

    const emailButton = document.getElementById("InstagramButton");
    if (emailButton) {
      emailButton.addEventListener("click", handleInstagramClick);
      return () => {
        emailButton.removeEventListener("click", handleInstagramClick);
      };
    }
  }, []);

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Image
          src="/images/logo/01_Hovia_Logo HQ.jpg"
          alt=""
          height={144}
          width={144}
          style={{ mixBlendMode: "darken" }}
        />
        <Text>© 2023 Hovia Education Consultants. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <div id="FacebookButton">
            <SocialButton
              label={"Facebook"}
              id="FacebookButton"
              // href={"https://www.facebook.com/profile.php?id=100093975039138"}
            >
              <FaFacebook />
            </SocialButton>
          </div>
          <div id="LinkedInButton">
            <SocialButton
              label={"LInkedIn"}
              id="LinkedInButton"
              // href={
              // "https://www.linkedin.com/company/hovia-educational-consultants-hec/"
              // }
            >
              <FaLinkedin />
            </SocialButton>
          </div>
          <div id="InstagramButton ">
            <SocialButton
              label={"Instagram"}
              id="InstagramButton"
              // href={"https://www.instagram.com/hoviaconsultants/"}
            >
              <FaInstagram />
            </SocialButton>
          </div>
        </Stack>
      </Container>
    </Box>
  );
}
