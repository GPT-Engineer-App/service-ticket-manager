import { Box, Text, VStack, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState({ openTickets: 0, closedTickets: 0 });
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();
  const [filter, setFilter] = useState("month");

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setUserRole(role);
    if (role !== "ServiceManager") {
      alert("You do not have permission to view the dashboard.");
      navigate("/");
      return;
    }
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const openTickets = storedTickets.filter(ticket => ticket.status === "Open").length;
    const closedTickets = storedTickets.filter(ticket => ticket.status === "Resolved").length;
    setData({ openTickets, closedTickets });
  }, [navigate]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    // Add logic to filter tickets by month or quarter
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Select value={filter} onChange={handleFilterChange}>
          <option value="month">This Month</option>
          <option value="quarter">This Quarter</option>
        </Select>
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