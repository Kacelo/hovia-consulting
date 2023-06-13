"use client"
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';

  export default function ContactUsHero() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(/images/contactus.jpg)'
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
              fontWeight={900}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '6xl', lg: '7xl' })}>
             CONTACT US
            </Text>
          </Stack>
        </VStack>
      </Flex>
    );
  }
