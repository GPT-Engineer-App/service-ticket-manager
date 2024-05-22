import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/");
  };

  return (
    <Box bg="brand.800" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'brand.700' }} _activeLink={{ bg: 'brand.900', color: 'white' }}>
            Home
          </Link>
          {userRole === "Customer" && (
            <>
              <Link as={NavLink} to="/create-ticket" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'brand.700' }} _activeLink={{ bg: 'brand.900', color: 'white' }}>
                Create Ticket
              </Link>
              <Link as={NavLink} to="/view-tickets" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'brand.700' }} _activeLink={{ bg: 'brand.900', color: 'white' }}>
                View Tickets
              </Link>
            </>
          )}
          {userRole === "ServiceModerator" && (
            <>
              <Link as={NavLink} to="/view-tickets" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'brand.700' }} _activeLink={{ bg: 'brand.900', color: 'white' }}>
                View Tickets
              </Link>
            </>
          )}
          {userRole === "ServiceAgent" && (
            <>
              <Link as={NavLink} to="/view-tickets" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'brand.700' }} _activeLink={{ bg: 'brand.900', color: 'white' }}>
                View Tickets
              </Link>
            </>
          )}
          {userRole === "ServiceManager" && (
            <>
              <Link as={NavLink} to="/dashboard" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'brand.700' }} _activeLink={{ bg: 'brand.900', color: 'white' }}>
                Dashboard
              </Link>
            </>
          )}
        </Box>
        <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;