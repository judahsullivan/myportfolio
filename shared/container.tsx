import React from "react";
import { Box } from '@chakra-ui/react'

export const Container = props => (
  <Box
    textAlign={'center'}
    fontSize={'xl'}
    w={['90%', '85%']}
    maxW={800}
    {...props}
  />
)

export default Container
