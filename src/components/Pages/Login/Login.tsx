// Import necessary libraries from Chakra UI and React
import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Input,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";

const Login = () => {
  const handleLogin = () => {};

  return (
    <Flex minHeight="100vh" align="center" justify="center" bg="gray.100">
      <Box w="full" maxW="md" p={8} borderRadius="lg" boxShadow="lg" bg="white">
        <Heading as="h1" size="lg" textAlign="center" mb={6}>
          Login
        </Heading>
        <VStack align="stretch">
          <Box>
            <Text mb={1} fontWeight="medium">
              Email address
            </Text>
            <Input type="email" placeholder="Enter your email" />
            <Text fontSize="sm" color="gray.500" mt={1}>
              We'll never share your email.
            </Text>
          </Box>

          <Box>
            <Text mb={1} fontWeight="medium">
              Password
            </Text>
            <Input type="password" placeholder="Enter your password" />
          </Box>

          <Button colorScheme="blue" size="lg" w="full" onClick={handleLogin}>
            Login
          </Button>

          <Text textAlign="center" fontSize="sm" color="gray.600">
            Don't have an account? <Button colorPalette="blue">Sign up</Button>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Login;
