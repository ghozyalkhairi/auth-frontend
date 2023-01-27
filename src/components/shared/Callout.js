import { Box, Button } from "@chakra-ui/react"
import Link from "next/link"

const Callout = () => {
  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py="4"
    >
      <Link href="/login">
        <Button size="lg" colorScheme="blue" variant="outline" mr="4">
          Login
        </Button>
      </Link>
      <Link href="/register">
        <Button size="lg" colorScheme="blue" variant="solid">
          Register
        </Button>
      </Link>
    </Box>
  )
}

export default Callout
