import { memo } from "react"
import TicketCard from "./ui/ticketCard"
import { Ticket } from "../core/types"
import { Stack } from "@chakra-ui/react"

const TicketsPage = memo(({ tickets }: { tickets: Ticket[] }) => {
  return (
    <Stack direction="column" gap={4} p={4} flex="1">
      <TicketCard />
    </Stack>
  )
})

export default TicketsPage
