import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Welcome to the Service Ticket Management App</Text>
        <Text fontSize="xl">Manage your service tickets efficiently and effectively.</Text>
      </VStack>
    </Container>
  );
};

export default Index;