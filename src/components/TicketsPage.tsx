import { memo } from "react";
import { Text } from "@chakra-ui/react";
import { Ticket } from "../core/types";

const TicketsPage = memo(({ tickets }: { tickets: Ticket[] }) => {
  return (
    <Text whiteSpace="pre-wrap" fontFamily="monospace" p={8}>
      {JSON.stringify(tickets, null, 2)}
    </Text>
  );
});

export default TicketsPage;
