import { useEffect, useState } from "react"
import { Filters, Ticket } from "../core/types"

interface useSelectedTicketsProps {
  tickets: Ticket[]
  filters: Filters<Ticket>
}

export default function useSelectedTickets({
  tickets,
  filters,
}: useSelectedTicketsProps) {
  const [selectedTickets, setTickets] = useState<Ticket[]>(tickets)

  function filterTickets<T extends Ticket>(tickets: T[], filters: Filters<T>) {
    let tList = [...tickets]
    for (const [key, filterValues] of Object.entries(filters) as [
      keyof T,
      T[keyof T][]
    ][]) {
      if (filterValues.length) {
        tList = tList.filter((ticket) => filterValues.includes(ticket[key]))
      }
    }
    return tList
  }

  useEffect(() => {
    setTickets(filterTickets(tickets, filters))
  }, [tickets, filters])

  return { selectedTickets }
}
