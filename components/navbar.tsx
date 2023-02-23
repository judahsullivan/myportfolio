import NextLink from 'next/link'
import {
  Box,
  Link,
  HStack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
  useColorModeValue,
  useDisclosure,
  Icon,
  Text,

} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { AiTwotoneThunderbolt } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImProfile } from 'react-icons/im'
import { MdTimeline } from 'react-icons/md'
import ThemeToggleButton from './theme-toggle-button'
import { MotionMagicLink } from '@/shared/magicLink'
import { useLinkColor } from '@/shared/color'
const webLinks = [

  { name: 'Journey', path: '/journey' },
  { name: 'Projects', path: '/projects' },
  { name: 'Tech-Stack', path: '/tech-stack' },

]


const mobileLinks = [

  { name: 'Journey', path: '/journey' },
  { name: 'Projects', path: '/projects' },
  { name: 'Tech-Stack', path: '/tech-stack' },

]


interface NavLinkProps {
  index?: number;
  name: string;
  path: string;
  linkColor: string;
  onClose: () => void;
}

interface MenuLinkProps {
  name: string;
  path: string;
  color: string;
  bg: string;
  rPath: string;
  onClose: () => void;
}


const MenuLink = (props: MenuLinkProps) => {
  const iconsObj = {
    '/journey': <Icon as={ImProfile} size={18} color={props.color} />,
    '/projects': <Icon as={MdTimeline} size={18} color={props.color} />,
    '/tech-stack': <Icon as={AiTwotoneThunderbolt} size={18} color={props.color} />,
  };

  return (
    <NextLink href={props.path} passHref>
      <Link onClick={() => props.onClose()}>
        <MenuItem >
          <HStack align={'center'} ml={4}>
            {iconsObj[props.path]}
            <Text>{props.name}</Text>
          </HStack>
        </MenuItem>
      </Link>
    </NextLink>
  );
};

const NavLink = (props: NavLinkProps) => {

  return (
    <MotionMagicLink
      href={props.path}
      px={3}
      py={1}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: .9 }}
      _hover={{


        backgroundColor: useColorModeValue('red.600', 'messenger.500'),
        color: useColorModeValue('#202023', 'whiteAlpha.500'),
        borderRadius: 'md'

      }}



    >
      {props.name}
    </MotionMagicLink>
  )
}

interface MenuLinkProps {
  name: string;
  path: string;
  rPath: string;
  onClose: () => void;

}

export default function Navbar() {
  const linkColor = useLinkColor();
  const router = useRouter();
  const { onClose } = useDisclosure();

  const menuProps = {
    bg: useColorModeValue('gray.200', 'gray.700'),
    color: useColorModeValue('blue.500', 'blue.200')
  };
  return (

    <Box
      bg={useColorModeValue('whiteAlpha.700', 'blackAlpha.900')}
      px={6}
      boxShadow={'lg'}
      position={'fixed'}
      p={2}
      zIndex={99}
      css={{
        backdropFilter: 'blur(15px)'
      }}

      w={'full'}
    >
      <Flex
        justify={'space-between'}
        align={'center'}
        maxW={'container.lg'}
        mx={'auto'}

      >
        <MotionMagicLink
          align={'center'}
          padding={2}
          href={"/"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: .9 }}
          _hover={{
            backgroundColor: linkColor,
            borderRadius: 'md',
          }}

        >
          JBYRD
        </MotionMagicLink>
        <HStack
          as={'nav'}
          spacing={3}
          display={{ base: 'none', md: 'flex' }}
        >
          {webLinks.map((link, index) => (
            <NavLink
              key={index}
              name={link.name}
              path={link.path}
              linkColor={linkColor}
              onClose={onClose}
            />


          ))}

        </HStack>
        <Flex align={'center'}>


          <Menu autoSelect={false} isLazy>
            {({ isOpen, onClose }) => (
              <>
                <MenuButton
                  display={{ base: 'inline-block', md: 'none' }}
                  mr={2}
                  as={Button}
                  variant="options"
                  color={useColorModeValue('red.500', 'messenger.500')}
                  size="sm"
                  p={2}
                  lineHeight="inherit"
                  fontSize={'1em'}
                  rounded={'md'}

                >
                  <Icon
                    as={GiHamburgerMenu}
                    h={5}
                    w={5}
                    ml={1}
                    transition={'all .25s ease-in-out'}
                    transform={isOpen ? 'rotate(180deg)' : ''}
                  />
                </MenuButton>
                <MenuList
                  zIndex={5}
                  bg={useColorModeValue('rgb(255, 255, 255)', 'rgb(26, 32, 44)')}
                  border="none"
                  boxShadow={useColorModeValue(
                    '2px 4px 6px 2px rgba(160, 174, 192, 0.6)',
                    '2px 4px 6px 2px rgba(9, 17, 28, 0.6)'
                  )}
                >
                  {mobileLinks.map((link, index) => (
                    <MenuLink
                      key={index}
                      path={link.path}
                      name={link.name}
                      onClose={onClose}
                      color={linkColor}
                      bg={menuProps.bg}
                      rPath={router.pathname}
                    />
                  ))}
                </MenuList>
              </>
            )}
          </Menu>
          <ThemeToggleButton />
        </Flex>
      </Flex>
    </Box>



  )
}
