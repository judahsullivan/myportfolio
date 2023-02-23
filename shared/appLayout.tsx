import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";
import { Fragment } from "react";

function AppLayout(props) {
  return (
    <Fragment>
      <Navbar />
      <Box textAlign={'center'} fontSize={'xl'} w={['90%', '85%', '85%']} maxW={800} mx={'auto'}>
        <Box pt={'4em'} pb={10} mx='auto'>
          {props.children}
        </Box>
      </Box>
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default AppLayout
