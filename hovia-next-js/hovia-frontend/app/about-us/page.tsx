"use client"

    import {
        Stack,
        Flex,
        Button,
        Text,
        VStack,
        useBreakpointValue,
      } from '@chakra-ui/react';
      import OurVision from '../components/OurVision';
      
      export default function AboutUS() {
        return (
            <>
            
          <Flex
            w={'full'}
            h={'90vh'}
            backgroundImage={
              'url(/images/lady.jpg)'
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
                  fontSize={useBreakpointValue({ base: '3xl', md: '4xl', lg: "6xl" })}>
                GET TO KNOW US
                </Text>
                
              </Stack>
            </VStack>
          </Flex>
          <OurVision />

          </>
        );
      }
