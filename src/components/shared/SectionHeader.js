import { Text } from "@chakra-ui/react"

const SectionHeader = ({ text }) => {
  return (
    <Text fontSize="2xl" fontWeight="600" textAlign="center" mb="4">
      {text}
    </Text>
  )
}

export default SectionHeader
