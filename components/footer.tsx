import { Stack, Link, Flex, Text, IconButton, Box } from '@chakra-ui/react'
import React from 'react'
import siteConfig from './site-config'

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
}

const Footer = () => {
  return (
    <Stack
      as='footer'
      isInline
      spacing={[1, 2]}
      p={4}
      justify={'space-between'}
      align={'center'}
      w={['100%']}
      maxW={'container.md'}
      mx={'auto'}

    >
      <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems={'center'}
        w={'100%'}

      >
        <Text
          textAlign={'center'}
          fontSize={'md'}
          fontFamily={'heading'}
          letterSpacing={'widest'}
        >
          ©{new Date().getFullYear()} Judah Sullivan
        </Text>
        <Box textAlign={'center'}>
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </Box>
      </Flex>

    </Stack>
  )
}

export default Footer
