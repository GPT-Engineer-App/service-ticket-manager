import { Box, Text, VStack } from "@chakra-ui/react";

const ViewTickets = () => {
  // Placeholder for tickets data
  const tickets = [
    { id: 1, title: "Issue with login", status: "Open" },
    { id: 2, title: "Page not loading", status: "Closed" },
  ];

  return (
    <Box p={4}>
      <VStack spacing={4}>
        {tickets.map((ticket) => (
          <Box key={ticket.id} p={4} borderWidth="1px" borderRadius="lg" w="100%">
            <Text fontSize="xl" fontWeight="bold">{ticket.title}</Text>
            <Text>Status: {ticket.status}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ViewTickets;