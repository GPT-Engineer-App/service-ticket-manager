import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ViewTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTickets);
  }, []);

  const handleAssign = (id) => {
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === id) {
        return { ...ticket, status: "Assigned" };
      }
      return ticket;
    });
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  };

  const handleUpdate = (id, solution) => {
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === id) {
        return { ...ticket, status: "Resolved", solution };
      }
      return ticket;
    });
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        {tickets.map((ticket, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" w="100%">
            <Text fontSize="xl" fontWeight="bold">{ticket.title}</Text>
            <Text>Status: {ticket.status}</Text>
            {ticket.status === "Open" && (
              <Button colorScheme="blue" onClick={() => handleAssign(index)}>Assign</Button>
            )}
            {ticket.status === "Assigned" && (
              <Button colorScheme="green" onClick={() => handleUpdate(index, "Solution provided")}>Provide Solution</Button>
            )}
            {ticket.status === "Resolved" && (
              <Text>Solution: {ticket.solution}</Text>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ViewTickets;