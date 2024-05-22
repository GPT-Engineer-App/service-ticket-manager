import { Box, Button, VStack, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    localStorage.setItem("userRole", role);
    navigate(`/${role.toLowerCase()}`);
  };

  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <VStack spacing={4}>
        <Heading>Select Your Role</Heading>
        <Button colorScheme="blue" onClick={() => handleRoleSelection("Customer")}>Customer</Button>
        <Button colorScheme="green" onClick={() => handleRoleSelection("ServiceModerator")}>Service Moderator</Button>
        <Button colorScheme="orange" onClick={() => handleRoleSelection("ServiceAgent")}>Service Agent</Button>
        <Button colorScheme="red" onClick={() => handleRoleSelection("ServiceManager")}>Service Manager</Button>
      </VStack>
    </Box>
  );
};

export default RoleSelection;