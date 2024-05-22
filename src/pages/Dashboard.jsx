import { Box, Text, VStack } from "@chakra-ui/react";

const Dashboard = () => {
  // Placeholder for dashboard data
  const data = {
    openTickets: 5,
    closedTickets: 10,
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Box p={4} borderWidth="1px" borderRadius="lg" w="100%">
          <Text fontSize="xl" fontWeight="bold">Open Tickets: {data.openTickets}</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="lg" w="100%">
          <Text fontSize="xl" fontWeight="bold">Closed Tickets: {data.closedTickets}</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;