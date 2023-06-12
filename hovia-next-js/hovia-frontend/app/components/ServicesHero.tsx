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
    buttonWording: string;
  }
  const openGoogleForm = () => {
    const url = `https://docs.google.com/forms/d/e/1FAIpQLSc1gqVUKwDfC3T5AEIPyuWJJwiBx0Nk3ssKistMPi-7B5swxg/viewform`;
    window.open(url, '_blank');
  };
  export default function ServicesHero({ title, text, imageSrc, buttonWording}: FeatureProps) {
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
                  bg: '#008000',
                  zIndex: -1,
                }}>
                Services for
              </Text>
              <br />{' '}
              <Text color={''} as={'span'}>
                {title}
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              {text}
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              {buttonWording === 'Apply Now' ? <Button
                rounded={'full'}
                bg={'#008000'}
                color={'white'}
                onClick={openGoogleForm}
                _hover={{
                  bg: 'white.500',
                }}>
                  {buttonWording}
              </Button>:<Button
                rounded={'full'}
                bg={'#008000'}
                color={'white'}
                _hover={{
                  bg: 'white.500',
                }}>
                {buttonWording}
              </Button>}
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