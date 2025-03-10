import { Box, Text, VStack } from "@chakra-ui/react"

const Dropdown = () => {
  return (
    <Box
    position="absolute"
    top="45px"
    left="0"
    w="100%"
    bg="white"
    boxShadow="lg"
    p={4}
    zIndex="overlay"
  >
    <VStack gap={4} align="stretch">
      <Text fontSize="lg" fontWeight="bold">
        Overlay Title
      </Text>
      <Text>This is some content inside the overlay.</Text>
    </VStack>
  </Box>
  )
}

export default Dropdown