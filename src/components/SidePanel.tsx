import { Stack } from "@chakra-ui/react"
import FilterSection from "./ui/filterSection"

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
    >
      <FilterSection
        name="Priority"
        list={["High", "Medium", "Small"]}
        onClick={console.log}
      />
    </Stack>
  )
}

export default SidePanel
