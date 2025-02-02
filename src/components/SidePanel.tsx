import { Stack } from "@chakra-ui/react"
import FilterSection from "./ui/filterSection"
import { IsFilterActive, ToggleFilter } from "../core/types"

interface SidePanelProps {
  toggleFilter: ToggleFilter
  isFilterActive: IsFilterActive
}

const SidePanel = ({ toggleFilter, isFilterActive }: SidePanelProps) => {
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
        toggleFilter={toggleFilter}
        isFilterActive={isFilterActive}
        name="Priority"
        list={["High", "Medium", "Low"]}
      />

      <FilterSection
        toggleFilter={toggleFilter}
        isFilterActive={isFilterActive}
        name="Status"
        list={["Backlog", "Triage", "In-progress", "Done"]}
      />
    </Stack>
  )
}

export default SidePanel
