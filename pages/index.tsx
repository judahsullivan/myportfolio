import React from 'react'
import { Image, Box, HStack, chakra, Stack, useColorModeValue, Button, Icon } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import PageLayout from '@/shared/pageLayout'
import { MagicLink } from '@/shared/magicLink'
import Section from '@/shared/section'
import Features from '@/components/features'

const Home = () => {
  return (
    <PageLayout title='Home'>
      <Stack
        p={{ base: 10, md: 10 }}
        direction={{ base: 'column', lg: 'row' }}
        align='center'
        mx={'auto'}

      >


        <Image
          alt='homeimage'
          borderRadius={'xl'}
          top={0}
          bottom={0}
          left={0}
          right={0}
          opacity={'0.8'}
          width='480px'
          src={'../assets/images/main-screen.png'}
        />
        <Stack
          left={'5'}
          pos={'relative'}
          zIndex={1}
          direction={'column'}
          justifyContent={'center'}
          spacing={6}
          maxW={'550px'}
          align={'center'}
        >

          <Box pb={8}>
            <Stack
              pos="relative"
              borderRadius={'lg'}
              bgGradient={useColorModeValue(`linear(to-l, red.500,red.400,red.200 )`, `linear(to-l, blue.500, blue.400 , cyan.400)`)}
              height="250px"
              w="100%"
              textAlign={'center'}
            >    <chakra.h1

              fontSize={{ base: '3xl', sm: '5xl' }}
              lineHeight={1}
              fontWeight="thin"
              letterSpacing={4}
            >
                Judah Sullivan
              </chakra.h1>

            </Stack>
            <Box maxW="3xl" p={4} textAlign='center' isolation="isolate" zIndex={3} mt="-10rem" marginInline="auto">
              <Box
                boxShadow={useColorModeValue(
                  '0 4px 6px rgba(160, 174, 192, 0.6)',
                  '0 4px 6px rgba(9, 17, 28, 0.9)'
                )}
                bg={useColorModeValue('white', 'gray.800')}
                p={{ base: 4, sm: 8 }}
                overflow="hidden"
                rounded="2xl"
              >


                <Stack pos="relative" zIndex={1} direction="column" spacing={5} textAlign="left">
                  <chakra.h1 fontSize="2xl" lineHeight={1.2} display={'flex'} fontWeight="bold">
                    Here is a little About me
                  </chakra.h1>
                  <chakra.h1 color="gray.400" fontSize="xl" maxW="600px" lineHeight={1.2} flexShrink={1}>
                    I am a Developer based out of
                    <chakra.span color={useColorModeValue('red.500', 'messenger.500')} textAlign='center'> Grand Rapids</chakra.span> with a strong passion for design and problem solving. I pride myself on focus and creativity constantly push myself everytime.

                  </chakra.h1>

                </Stack>
              </Box>
              <HStack mt={4} spacing={{ base: 0, sm: 2 }} display={'flex'} w={'max'} flexWrap="wrap" mx={'auto'}  >
                <Button
                  aria-label='open projects'
                  h={10}
                  px={6}
                  color="white"
                  fontSize="md"
                  rounded="md"
                  bg={useColorModeValue('red.600', 'messenger.900')}
                  mb={{ base: 2, sm: 0 }}
                  zIndex={5}
                  lineHeight={1}
                  _hover={{ bg: useColorModeValue('red.700', 'blue.800') }}
                >Check My Work</Button>
                <Button
                  aria-label='source code'
                  h={10}
                  px={6}
                  color="white"
                  fontSize="md"
                  rounded="md"
                  mb={{ base: 2, sm: 0 }}
                  zIndex={5}
                  lineHeight={1}
                  bg={useColorModeValue('black', 'gray')}
                  _hover={{ bg: useColorModeValue('gray.600', 'gray.900') }}
                >
                  <MagicLink display={{ base: 'flex', md: 'column' }} href={'https://www.github.com/judahsullivan'} target='_blank'>
                    <Icon as={FaGithub} mr={2} />
                    Source Code
                  </MagicLink>
                </Button>
              </HStack>
            </Box>
          </Box>


        </Stack>

      </Stack>
      <Section >
        <Features />
      </Section>
    </PageLayout >
  )
}

export default Home
