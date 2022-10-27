import React from "react";
import {
  Box,
  Center,
  Flex,
  FormControl,
  HStack,
  Input,
  FormLabel,
  Select,
  Button,
} from "@chakra-ui/react";

const App = () => {
  return (
    <Box h="100vh">
      <Center
        as="header"
        h={110}
        bg="#F8DB1C"
        color="#fefce8"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        Viajar é bom demais!
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 110px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl display="flex" flexDir="column" gap="4">
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                <Input id="nome" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="tel">Telefone</FormLabel>
                <Input id="tel" type="number" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cpf">CPF</FormLabel>
                <Input id="cpf" type="number" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="50%">
              <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Select placeholder="Selecione a cidade">
                  <option value="option1"></option>
                </Select>
              </Box>
              <Box w="50%">
              <FormLabel htmlFor="pais">País</FormLabel>
                <Select placeholder="Selecione o país">
                  <option value="option2"></option>
                </Select>
              </Box>
            </HStack>
            <HStack justify='center'>
            <Button
            w={240}
            p='6'
            type='submit'
            colorScheme='yellow'
            color='white'
            fontWeight='bold'
            mt='2'
            fontSize="xl"
            >
              Enviar</Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
};

export default App;
