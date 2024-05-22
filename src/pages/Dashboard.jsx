import { Box, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState({ openTickets: 0, closedTickets: 0 });

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const openTickets = storedTickets.filter(ticket => ticket.status === "Open").length;
    const closedTickets = storedTickets.filter(ticket => ticket.status === "Resolved").length;
    setData({ openTickets, closedTickets });
  }, []);

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