import { useState, useEffect } from "react";
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

import axios from "axios";

const App = () => {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let city = axios.get("https://amazon-api.sellead.com/city");
    let country = axios.get("https://amazon-api.sellead.com/country");
    axios.all([city, country]).then(
      axios.spread((...res) => {
        setCities(res[0].data);
        setCountries(res[1].data);
      })
    );
  }, []);

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
                <FormLabel htmlFor="pais">País</FormLabel>
                <Select placeholder="Selecione o país">
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name_ptbr}
                    </option>
                  ))}
                </Select>
              </Box>
              <Box w="50%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Select placeholder="Selecione a cidade">
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name_ptbr}
                    </option>
                  ))}
                </Select>
              </Box>
            </HStack>
            <HStack justify="center">
              <Button
                w={240}
                p="6"
                type="submit"
                colorScheme="yellow"
                color="white"
                fontWeight="bold"
                mt="2"
                fontSize="xl"
              >
                Enviar
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
};

export default App;
