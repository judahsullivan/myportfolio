import NextLink from 'next/link'
import {
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import { MotionBox } from '@/shared/motion'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <MotionBox my={6} align="center">
        <NextLink href="/" passHref>
          <Button aria-label='return home' colorScheme="teal">Return to home</Button>
        </NextLink>
      </MotionBox>
    </Container>
  )
}

export default NotFound
