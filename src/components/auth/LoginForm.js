import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react"

const LoginForm = () => {
  return (
    <Box
      as="form"
      w="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      py="4"
      gap="4"
    >
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input placeholder="email@gmail.com" type="email" />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input placeholder="password" type="password" />
      </FormControl>
      <Button type="submit" colorScheme="blue" variant="solid" w="100%" mt="4">
        Login
      </Button>
    </Box>
  )
}

export default LoginForm
