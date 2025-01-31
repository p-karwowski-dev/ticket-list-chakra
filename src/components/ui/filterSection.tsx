import { Button, Stack, Text } from "@chakra-ui/react"
import { IsFilterActive, Ticket, ToggleFilter } from "../../core/types"

interface FilterSectionProps {
  name: string
  list: string[]
  toggleFilter: ToggleFilter
  isFilterActive: IsFilterActive
}

function FilterSection({
  name,
  list,
  toggleFilter,
  isFilterActive,
}: FilterSectionProps) {
  const key = name.toLowerCase() as keyof Ticket

  return (
    <Stack direction="column" gap={2}>
      <Text color="gray.400">{name} filter:</Text>

      {list.map((filterValue) => {
        const value = filterValue.toLowerCase() as Ticket[keyof Ticket]
        const isActive = isFilterActive({ key, value })

        return (
          <Button
            key={filterValue}
            onClick={() => {
              toggleFilter({ key, value })
            }}
            rounded="xl"
            variant={isActive ? "surface" : "outline"}
            colorPalette={isActive ? "green" : "cyan"}
            size="sm"
          >
            {filterValue}
          </Button>
        )
      })}
    </Stack>
  )
}

export default FilterSection
