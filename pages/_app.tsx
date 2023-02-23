import '@/styles/globals.css'
import { FontsGlobal } from '@/utils/themes/fonts'
import { ChakraProvider, } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '@/utils/themes/index'
import AppLayout from '@/shared/appLayout'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <FontsGlobal />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  )
}
