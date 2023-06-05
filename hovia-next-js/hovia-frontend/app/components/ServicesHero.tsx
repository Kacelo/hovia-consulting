import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  interface FeatureProps {
    title: string;
    text: string;
    imageSrc: string;
  }
  
  export default function ServicesHero({ title, text, imageSrc}: FeatureProps) {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'column', lg: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#B3CF32',
                  zIndex: -1,
                }}>
                Services for
              </Text>
              <br />{' '}
              <Text color={'#B3CF32'} as={'span'}>
                {title}
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              {text}
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'#B3CF32'}
                color={'white'}
                _hover={{
                  bg: 'white.500',
                }}>
                Book appointment
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              `${imageSrc}`
            }
          />
        </Flex>
      </Stack>
    );
  }