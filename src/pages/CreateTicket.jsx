import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle ticket creation logic here
    const newTicket = { title, description, status: "Open" };
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    tickets.push(newTicket);
    localStorage.setItem("tickets", JSON.stringify(tickets));
    console.log("Ticket Created:", newTicket);
    navigate("/view-tickets");
  };

  return (
    <Box p={4}>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue">Create Ticket</Button>
      </VStack>
    </Box>
  );
};

export default CreateTicket;