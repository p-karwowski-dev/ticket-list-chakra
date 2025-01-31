import { memo } from "react"
import TicketCard from "./ui/ticketCard"
import { Ticket } from "../core/types"
import { VStack } from "@chakra-ui/react"
import TicketListHeader from "./ui/ticketListHeader"

const TicketsPage = memo(({ tickets }: { tickets: Ticket[] }) => {
  return (
    <>
      <VStack flex={1} overflowY="auto">
        <TicketListHeader />
        <VStack width="100%" p={4} pt={0} align="stretch">
          {tickets.map((ticket) => (
            <TicketCard t={ticket} />
          ))}
        </VStack>
      </VStack>
    </>
  )
})

export default TicketsPage
