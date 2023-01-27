import { Box, Text, Button } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {
  const router = useRouter()
  const { pathname } = router
  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py="4"
      bg="blue.500"
      color="white"
      mb="4"
    >
      {pathname !== "/" ? (
        <Link href="/">
          <Text fontWeight="bold">Kembali</Text>
        </Link>
      ) : (
        <Text fontWeight="bold">Auth Frontend</Text>
      )}
    </Box>
  )
}

export default Navbar
