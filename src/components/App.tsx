import NavBar from "./NavBar"
import TicketsPage from "./TicketsPage"
import { useState } from "react"
import PageLayout from "./PageLayout"
import { TICKETS } from "../core/data"
import { Provider } from "./ui/provider"
import SidePanel from "./SidePanel"
import useFilters from "../hooks/useFilters"
import useSelectedTickets from "../hooks/useSelectedTickets"

function App() {
  const [tickets] = useState(() => TICKETS)
  const { filters, toggleFilter, isFilterActive } = useFilters()
  const { selectedTickets } = useSelectedTickets({ tickets, filters })

  return (
    <>
      <Provider enableSystem={false} defaultTheme="dark">
        <NavBar />
        <PageLayout>
          <SidePanel
            toggleFilter={toggleFilter}
            isFilterActive={isFilterActive}
          />
          <TicketsPage tickets={selectedTickets} />
        </PageLayout>
      </Provider>
    </>
  )
}

export default App
