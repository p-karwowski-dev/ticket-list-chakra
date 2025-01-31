import { memo } from "react"
import TicketCard from "./ui/ticketCard"
import { Ticket } from "../core/types"
import { VStack } from "@chakra-ui/react"

const TicketsPage = memo(({ tickets }: { tickets: Ticket[] }) => {
  return (
    <>
      <VStack gap={4} p={4} flex={1} overflowY="auto">
        {tickets.map((ticket) => (
          <TicketCard t={ticket} />
        ))}
      </VStack>
    </>
  )
})

export default TicketsPage
