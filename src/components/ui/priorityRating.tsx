import { memo } from "react"
import { Priority } from "../../core/types"
import { HStack } from "@chakra-ui/react"
import { StarIcon } from "@heroicons/react/16/solid"

const PriorityRating = memo(({ priority }: { priority: Priority }) => {
  return (
    <HStack gap={1}>
      <StarIcon width="20px" color="red" />
      <StarIcon
        width="20px"
        color={priority === "medium" || priority === "high" ? "red" : "gray"}
      />
      <StarIcon width="20px" color={priority === "high" ? "red" : "gray"} />
    </HStack>
  )
})

export default PriorityRating
