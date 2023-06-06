import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import AnchorLink from "react-anchor-link-smooth-scroll";

  export default function HoviaHero() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(/images/landing.webp)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>
              HOVIA EDUCATIONAL CONSULTANTS (HEC)
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'#B3CF32'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'green.500' }}>
                Contact Us
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }
