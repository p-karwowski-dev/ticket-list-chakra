import { Box, Grid, GridItem, Heading } from "@chakra-ui/react"

export default function TicketListHeader() {
  return (
    <Box
      w="100%"
      position="sticky"
      top={0}
      left={0}
      bg="gray.900"
      zIndex={1}
      p={4}
    >
      <Grid flex={1} px={4} templateColumns="repeat(18, 1fr)">
        <GridItem colSpan={11}>
          <Heading size="sm">Title / Description</Heading>
        </GridItem>

        <GridItem colSpan={2} justifySelf="end">
          <Heading size="sm">Status</Heading>
        </GridItem>

        <GridItem colSpan={2} justifySelf="end">
          <Heading size="sm">Priority</Heading>
        </GridItem>

        <GridItem colSpan={2} justifySelf="end">
          <Heading size="sm">Due Date</Heading>
        </GridItem>

        <GridItem colSpan={1} justifySelf="end">
          <Heading size="sm"></Heading>
        </GridItem>
      </Grid>
    </Box>
  )
}
