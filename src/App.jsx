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
  FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      tel: "",
      cpf: "",
      pais: [],
      cidade: [],
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Nome obrigatório")
        .min(3, "Nome muito curto"),
      email: Yup.string()
        .required("Email obrigatório")
        .min(3, "Email necessário"),
      tel: Yup.string()
        .required("Telefone obrigatório")
        .min(3, "Telefone necessário"),
      cpf: Yup.string().required("CPF obrigatório"),
      pais: Yup.array().required("País obrigatório"),
      cidade: Yup.array().required("Cidade obrigatória"),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 6));
      actions.resetForm();
    },
  });

  return (
    <>
      <Box h="100vh">
        <Center
          as="header"
          h={150}
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
          h="calc(100vh - 150px)"
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
            as="form"
            onSubmit={formik.handleSubmit}
          >
            <FormControl display="flex" flexDir="column" gap="4">
              <HStack spacing="4">
                <FormControl
                  isInvalid={formik.errors.name && formik.touched.name}
                >
                  <Box w="100%">
                    <FormLabel htmlFor="name">Nome Completo</FormLabel>
                    <Input
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                  </Box>
                </FormControl>
                <FormControl
                  isInvalid={formik.errors.email && formik.touched.email}
                >
                  <Box w="100%">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </Box>
                </FormControl>
              </HStack>
              <HStack spacing="4">
                <FormControl
                  isInvalid={formik.errors.tel && formik.touched.tel}
                >
                  <Box w="100%">
                    <FormLabel htmlFor="tel">Telefone</FormLabel>
                    <Input
                      id="tel"
                      type="text"
                      name="tel"
                      onChange={formik.handleChange}
                      value={formik.values.tel}
                      onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.tel}</FormErrorMessage>
                  </Box>
                </FormControl>
                <FormControl
                  isInvalid={formik.errors.cpf && formik.touched.cpf}
                >
                  <Box w="100%">
                    <FormLabel htmlFor="cpf">CPF</FormLabel>
                    <Input
                      id="cpf"
                      type="text"
                      name="cpf"
                      onChange={formik.handleChange}
                      value={formik.values.cpf}
                      onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.cpf}</FormErrorMessage>
                  </Box>
                </FormControl>
              </HStack>
              <HStack spacing="4">
                <FormControl
                  isInvalid={formik.errors.pais && formik.touched.pais}
                >
                  <Box w="100%">
                    <FormLabel htmlFor="pais">País</FormLabel>
                    <Select placeholder="Selecione o país">
                      {countries.map((country) => (
                        <option
                          key={country.code}
                          name="pais"
                          onChange={formik.handleChange}
                          value={formik.values.pais}
                          onBlur={formik.handleBlur}
                        >
                          {country.name_ptbr}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>{formik.errors.pais}</FormErrorMessage>
                  </Box>
                </FormControl>
                <FormControl
                  isInvalid={formik.errors.cidade && formik.touched.cidade}
                >
                  <Box w="100%">
                    <FormLabel htmlFor="cidade">Cidade</FormLabel>
                    <Select placeholder="Selecione a cidade">
                      {cities.map((city) => (
                        <option
                          key={city.id}
                          name="cidade"
                          onChange={formik.handleChange}
                          value={formik.values.cidade}
                          onBlur={formik.handleBlur}
                        >
                          {city.name_ptbr}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>{formik.errors.cidade}</FormErrorMessage>
                  </Box>
                </FormControl>
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
    </>
  );
};

export default App;
