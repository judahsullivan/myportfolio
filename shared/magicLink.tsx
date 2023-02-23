import NextLink, {type LinkProps as NextLinkProps} from 'next/link'
import {chakra,forwardRef } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'


export const MagicLink = chakra<typeof NextLink, NextLinkProps>(NextLink, {
    shouldForwardProp: (prop) => ['href', 'target', 'children', 'path'].includes(prop),})



export const MotionMagicLink = motion(
    forwardRef((props, ref) => {
          const chakraProps = Object.fromEntries(
            // do not pass framer props to DOM element
            Object.entries(props).filter(([key]) =>!isValidMotionProp(key))
          )
          return <MagicLink href={''} ref={ref} {...chakraProps} />
          })
)
