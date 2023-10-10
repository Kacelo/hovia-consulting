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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

interface Hairstyle {
  id: number;
  title: string;
  text: string;
}

interface PriceListProps {
  hairstyles: Hairstyle[];
  heading: string;
}

const PriceList: React.FC<PriceListProps> = ({ hairstyles, heading }) => {
  return (
    <Box p={4} mt={10}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading color={""} mb={5} fontSize={{ base: "3xl", md: "5xl" }}>
          {heading}
        </Heading>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={10}>
          {hairstyles.map((hairstyle) => (
            <HStack key={hairstyle.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{hairstyle.title}</Text>
                <Text color={"gray.600"}>{hairstyle.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default PriceList;
