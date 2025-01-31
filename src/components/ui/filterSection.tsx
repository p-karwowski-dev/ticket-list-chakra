import { Button, Stack, Text } from "@chakra-ui/react"
import { FilterClick } from "../../core/types"

interface FilterSectionProps {
  name: string
  list: string[]
  onClick: FilterClick
}

function FilterSection({ name, list, onClick }: FilterSectionProps) {
  return (
    <Stack direction="column" gap={2}>
      <Text color="gray.400">{name} filter:</Text>
      {list.map((filterValue) => (
        <Button
          key={filterValue}
          onClick={() => onClick()}
          rounded="xl"
          variant="surface"
          colorPalette="green"
          size="sm"
        >
          {filterValue}
        </Button>
      ))}
    </Stack>
  )
}

export default FilterSection
