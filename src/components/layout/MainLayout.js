import { Box } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "./Navbar"

const MainLayout = ({ children, title = "Home" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar title={title} />
      <Box h="auto" w="80%" mx="auto">
        {children}
      </Box>
    </>
  )
}

export default MainLayout
