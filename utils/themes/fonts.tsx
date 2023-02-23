import { Global } from "@emotion/react";

export const FontsGlobal = () => (
  <Global
    styles={`
@font-face {
font-family: 'M PLUS ROUNDED 1C'
font-style: normal;
font-weight: 400; 
font-display: swap; 
src: url('assets/fonts/MPLUSROUNDED1C-Regular.ttf') format('ROUNDED')
}
`}
  />

)
