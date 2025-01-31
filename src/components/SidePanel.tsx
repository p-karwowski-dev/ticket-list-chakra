import { Stack } from '@chakra-ui/react'

const SidePanel = () => {
  return (
    <Stack
      top="0"
      left="0"
      width="254px"
      height="100vh - 57px"
      gap={8}
      direction="column"
      bg="gray.800"
      position="sticky"
      boxShadow="md"
      borderRight="1px solid"
      borderColor="gray.700"
      p={4}
    />
  )
}

export default SidePanel
