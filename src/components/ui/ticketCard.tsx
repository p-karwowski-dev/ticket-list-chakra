import { Box, Card, Grid, GridItem, Heading } from "@chakra-ui/react"
import { Tooltip } from "./tooltip"
import { memo, useState, useId } from "react"
import PriorityRating from "./priorityRating"
import { Priority } from "../../core/types"
import { Avatar } from "./avatar"

const t = {
  id: 0,
  title: "Fix login page validation errors",
  description:
    "The login form does not display errors for invalid credentials.",
  priority: "medium" as Priority,
  status: "in-progress",
  dueDate: "2025-01-25",
  assignee: {
    id: 0,
    name: "Alex Johnson",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
  },
}

const TicketCard = memo(() => {
  const [isHidden, toggleHidden] = useState(true)
  const avatarId = useId()

  return (
    <Card.Root
      size="sm"
      w="100%"
      cursor="pointer"
      onClick={() => toggleHidden(!isHidden)}
    >
      <Card.Header>
        <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(18, 1fr)">
          <GridItem
            colSpan={11}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            <Heading size="md">{t.title}</Heading>
          </GridItem>

          <GridItem colSpan={2} justifySelf="end">
            <Heading size="sm" color="fg.muted">
              {t.status}
            </Heading>
          </GridItem>

          <GridItem colSpan={2} justifySelf="end">
            <Heading size="sm">
              <PriorityRating priority={t.priority} />
            </Heading>
          </GridItem>

          <GridItem colSpan={2} justifySelf="end">
            <Heading size="sm" color="fg.info">
              {t.dueDate}
            </Heading>
          </GridItem>

          <GridItem colSpan={1} justifySelf="end">
            <Tooltip
              content={t.assignee.name}
              showArrow
              ids={{ trigger: avatarId }}
            >
              <Avatar
                ids={{ root: avatarId }}
                name="Sage"
                colorPalette="blue"
                src="t.assignee.avatarUrl"
                size="xs"
                flex="0 0 auto"
                mr={4}
                mt={-1.5}
              />
            </Tooltip>
          </GridItem>
        </Grid>
      </Card.Header>
      <Card.Body color="fg.muted" p={isHidden ? 1.5 : 4}>
        <Box hidden={isHidden}>{t.description}</Box>
      </Card.Body>
    </Card.Root>
  )
})

export default TicketCard
