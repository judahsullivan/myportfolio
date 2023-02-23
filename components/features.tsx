import { Container, Box, chakra, Text, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { SiNextdotjs, SiChakraui, SiFramer, SiNeovim } from 'react-icons/si';
import { IconType } from 'react-icons';

interface IFeature {
  content: string;
  icon: IconType;
  color: string;
}

const features: IFeature[] = [
  {
    content: `A modular component library, used to speed the process of building Web apps.`,
    icon: SiChakraui,
    color: 'blue'
  },
  {
    content: `A Framer Work built on top of react.`,
    icon: SiNextdotjs,
    color: 'black,white'
  },
  {
    content: `A Motion Library for React, allows you to access motion animations through simple syntax.`,
    icon: SiFramer,
    color: 'cyan'
  },
  {
    content: `A IDE that is accessed through the terminal, Config was built through lua. Primarily used to speed up coding productivity.`,
    icon: SiNeovim,
    color: 'green'
  }
];

const Features = () => {
  return (
    <Container w={'full'} mx={'auto'} bgGradient={useColorModeValue(`linear(to-l, red.500,red.400,red.200 )`, `linear(to-l, blue.500, blue.400 , cyan.400)`)} maxW={900} borderRadius={'xl'} p={{ base: 5, md: 10 }}>
      <chakra.h2 fontSize="2xl" fontWeight="bold" mb={3} textAlign="center">
        These are the Technologies used to design this page!
      </chakra.h2>

      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={16} mt={12} mb={4}>
        {features.map((feature, index) => (
          <Box
            width={'full'}

            p={4}
            key={index}
            shadow={'xl'}
            textAlign="center"
            bg={useColorModeValue('white', 'blackAlpha.800')}
            borderRadius={'xl'}
          >
            <Icon as={feature.icon} w={10} h={10} color={feature.color} />
            <Text fontSize="md">{feature.content}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Features;
