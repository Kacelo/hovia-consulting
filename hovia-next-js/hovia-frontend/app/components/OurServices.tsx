import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
  } from 'react-icons/fc';
  import Image from 'next/image';

  interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
    imageSrc: string;
  }
  
  const Card = ({ heading, description, icon, href, imageSrc }: CardProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="sm"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
          style ={{width: "auto !important"}}
            w={236}
            h={156}
            align={'center'}
            justify={'center'}
            color={'white'}
            // rounded={'full'}
            bg={useColorModeValue('white', 'gray.700')}>
  {imageSrc ? <Image src={imageSrc}  alt=''height={236}
             style ={{width: "-webkit-fill-available !important"}} width={236}/> : ''}         </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} color={'yellow.500'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default function Services() {
    return (
      <Box p={2} marginTop={'20'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Our Services
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          {/* Welcome to our vibrant world of beauty and cosmetics! At our exceptional website, we offer a delightful array of services and products designed to elevate your personal style and enhance your natural charm. Step into our enchanting realm and discover a harmonious fusion of artistry, expertise, and top-notch customer care. */}
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={12} justify="center">
            <Card
              heading={'SERVICES FOR INDIVIDUALS'}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                `Preparing individuals, students with the essential skills for the future requires all
                Educators to create a collaborative culture for learning that sparks curiosity and
                creativity. We explore with tools that will boost student engagement, ignite creativity,
                and foster collaborative learning and development!`
              }
              href={'#'}
              imageSrc='/images/services/grad.jpg'
            />
            <Card
              heading={'SERVICES FOR ORGANIZATIONS'}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                `We help Education Professional Associations and Academic Institutions, scale into
                new and untapped markets, improve retention and market viability, build brand
                awareness, enhance brand identity, and improve quality. Our objective is to help
                institutions / organizations thrive in their educational business operations, to achieve
                optimal efficiency and productivity with our customized services, while focusing on
                their end goal.`
              }
              href={'#'}
              imageSrc='/images/services/institution.jpg'
            />
            <Card
              heading={'INTERN PROGRAM'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                `Benefits of our Intern Program:
                Through Hovia, a platform has been created to assist final year university/ college students
                to enhance their skills and develop their potential in preparation for the job market, by
                providing practical on-the-job training and job attachments opportunities, under the expertise
                that Hovia holds. Interns will be given a minimum of 6 months duration with an opportunity
                for extension. During the 6 months of internship certain areas will be developed through
                Hovia projects.`
              }
              href={'#'}
              imageSrc='/images/services/intern2.jpg'

            />
            {/* <Card
              heading={'Beauty Products'}
              icon={<Icon as={FcManager} w={10} h={10} />}
              description={
                'Discover a world of beauty at your fingertips with our carefully curated selection of beauty products. From luxurious skincare essentials to makeup must-haves and haircare gems, our collection features top-quality brands that will elevate your beauty routine and enhance your natural glow.'
              }
              href={'#'}
            /> */}
          </Flex>
        </Container>
      </Box>
    );
  }