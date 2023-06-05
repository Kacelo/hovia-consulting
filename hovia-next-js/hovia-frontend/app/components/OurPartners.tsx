import React from "react";
import {
  Box,
  Flex,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  StackDirection
} from "@chakra-ui/react";

interface Partner {
  id: number;
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

interface PartnersSectionProps {
  partners: Partner[];
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ partners }) => {
  const direction: StackDirection | undefined = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Box py={8}>
      <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb={4}>
        MEET OUR PARTNERS
      </Text>
      <Flex justify="center">
        <Stack direction={direction} spacing={6}>
          {partners.map((partner) => (
            <Link
              key={partner.id}
              href={partner.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={partner.logoUrl} alt={partner.name} boxSize={40} />
            </Link>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};

export default PartnersSection;
