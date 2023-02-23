import React, { useState } from 'react';
import {
  Container,
  Wrap,
  Box,
  FormControl,
  FormLabel,
  Flex,
  Button,
  Input,
  Textarea,
  useToast,
  InputLeftElement,
  VStack,
  WrapItem,
  InputGroup,
  useColorModeValue,
  Text
} from '@chakra-ui/react';
import { init } from '@emailjs/browser'
import ErrorMessage from './errormessage';
import emailjs from '@emailjs/browser'
import { MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import Header from '@/shared/header';

const Contact = () => {


  init("Rty6hmah3NpTvN0s5");

  const toast = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const clearInput = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs.send("service_5udo2ff", "template_5gy3rca", {
      from_name: name,
      from_email: email,
      message: message,
    }).then(() => {
      clearInput();

      toast({
        title: 'Email sent.',
        description: 'You had successfully sent the email. I will reply your email ASAP. Thank you!',
        status: 'success',
        duration: 9000,
        isClosable: true
      });

    }, (error) => {
      clearInput();

      toast({
        title: 'Email not sent.',
        description: error.text,
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    });
  }
  const maintitle = 'Like to get in Touch? '
  const subtitle = 'Just fill out the form I will get back to you as soon as possible!'
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <VStack >
        <Header>
          {maintitle}
        </Header>
        <Text
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          {subtitle}
        </Text>
      </VStack>
      <Flex>
        <Box
          bg={useColorModeValue('red.500', 'messenger.500')} borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <form onSubmit={handleSubmit}>
                        {error && <ErrorMessage message={error} />}
                        <FormControl isRequired>
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              value={name}
                              placeholder='Name'
                              onChange={event => setName(event.currentTarget.value)}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              type="email"
                              id='email'
                              size="md"
                              value={email}
                              placeholder='Email'
                              onChange={event => setEmail(event.currentTarget.value)}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <Button
                          aria-label='send email'
                          mt={2}
                          variant="solid"
                          colorScheme={useColorModeValue('red', 'blue')}
                          type='submit'
                          _hover={{}}
                          isLoading={isLoading}
                          loadingText={'Submitting'}
                        >
                          Send Message
                        </Button>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container >

  )
}

export default Contact;
