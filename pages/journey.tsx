import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Image,
  useColorMode,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
import { CardTransition, PageSlideFade, StaggerChildren } from '@/shared/transitions'
import { Tags } from '@/shared/Tags'
import PageLayout from '@/shared/pageLayout'
import { MotionBox } from '@/shared/motion'
import Header from '@/shared/header'
import { FaGraduationCap } from 'react-icons/fa'


interface CardProps {
  title: string
  desc: string;
  role: string
  skills: string[]
  period: string
  logo: string
  colorMode: string
  alt?: string
}


const Card = (props: CardProps) => {
  const { title, desc, role, skills, period, logo, colorMode, alt } = props
  return (
    <CardTransition>
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: 'lg' }}
        bg={useColorModeValue('white', 'gray.800')}
        position="relative"
        rounded="md"
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Image
              rounded="full"
              w={16}
              h={16}
              objectFit="cover"
              fallbackSrc={'/assets/images/placeholder.png'}
              src={logo}
              alt={alt}
            />
            <Stack spacing={2} pl={3} align="left">
              <Heading

                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {title}
              </Heading>
              <Heading
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {role}
              </Heading>
              <Text>{desc}</Text>
              <Stack
                spacing={1}
                mt={3}
                isInline
                alignItems="center"
                display={['none', 'none', 'flex', 'flex']}
              >
                <Tags
                  tags={skills}
                  interactive={false}
                  tagProps={{
                    colorScheme: 'gray',
                    padding: '0 3px',
                    size: 'sm',
                  }}
                />
              </Stack>
            </Stack>
          </Flex>
          <Stack display={['none', 'none', 'flex', 'flex']}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
          </Stack>
        </Flex>
        <Stack
          spacing={1}
          mt={3}
          isInline
          alignItems="center"
          display={['flex', 'flex', 'none', 'none']}
        >
          <Tags
            tags={skills}
            interactive={false}
            tagProps={{
              colorScheme: 'gray',
              padding: '0 3px',
              size: 'sm',
            }}
          />
        </Stack>
      </Box>
    </CardTransition>
  )
}

const Journey = ({ companies, institutes }) => {
  const { colorMode } = useColorMode()
  const title = 'Journey'
  const subtitle = 'Here is a brief overview of my overall experience.'
  return (
    <PageLayout
      title={title}
      description={subtitle}
    >
      <PageSlideFade>
        <StaggerChildren>
          <MotionBox width={"100%"} align={'center'}>
            <VStack align="start">
              <Header mt={0} mb={2}>
                My Journey
              </Header>
              <Text
                color={useColorModeValue('gray.500', 'gray.200')}
                textAlign="left"
              >
                {subtitle}
              </Text>
            </VStack>

          </MotionBox>

          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 6]}
            mt={12}
          >
            {companies.map((company, index) => (
              <MotionBox whileHover={{ y: -5 }} >
                <Card
                  key={index}
                  title={company.title}
                  role={company.role}
                  skills={company.skills}
                  period={company.period}
                  logo={company.logo}
                  colorMode={colorMode}
                  desc={company.desc}
                />
              </MotionBox>
            ))}
          </VStack>
          <Divider m={8} />
          <Heading>
            <Flex alignItems="center">
              <Heading textDecoration={'underline'} mt={0} mb={0}>
                Education
              </Heading>
              <Stack pl={3}>
                <Box as={FaGraduationCap} size="25px" />
              </Stack>
            </Flex>
          </Heading>
          <VStack
            spacing={4}
            marginBottom={6}
            align="left"
            mx={[0, 0, 6]}
            mt={12}
          >
            {institutes.map((institute, index) => (
              <MotionBox key={index} whileHover={{ y: -5 }}>
                <Card
                  key={index}
                  title={institute.title}
                  role={institute.role}
                  skills={institute.skills}
                  period={institute.period}
                  logo={institute.logo}
                  colorMode={colorMode}
                  desc={institute.desc}
                />
              </MotionBox>
            ))}
          </VStack>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  )
}



export default Journey
export { getServerSideProps } from 'shared/chakraSSR'
