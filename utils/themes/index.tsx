import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import { mergeWith } from '@chakra-ui/utils'



export function makeTheme(overrides: ThemeOverride = {}) {
  const theme = extendTheme({
    ...extendedTheme,
  })
  return mergeWith(theme, overrides)
}


export const extendedTheme = extendTheme({
  fonts: {
    body: `M PLUS Rounded 1c, -apple-system."Segoe UI, Arial, san-serif"`

  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#f0e7db', '#202023')(props),

      },
    }),
  },

})


export const theme = makeTheme()
