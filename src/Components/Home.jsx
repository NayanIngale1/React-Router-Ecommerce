import { Box, Flex, Heading, SimpleGrid, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Box>
        <Heading m={10} textAlign="center">
          {" "}
          Home Page{" "}
        </Heading>
      </Box>

      <SimpleGrid m={"20px auto"} columns={4} spacing={10} maxW={1200} mt={10}>
        <Link to="/category/men's clothing">
          <Box>
            <Box objectFit="cover" p={1}>
              <Image
                _hover={{ boxShadow: "lg" }}
                borderRadius="lg"
                src="https://assetscdn1.paytm.com/images/catalog/view_item/740751/1618833424219.jpg"
              ></Image>
            </Box>

            <Flex justify="center">
              <Text fontWeight={500} mt={5} fontSize={25}>
                Men's Section{" "}
              </Text>
            </Flex>
          </Box>
        </Link>
        <Link to="/category/women's clothing">
          <Box>
            <Box objectFit="cover" p={1}>
              <Image
                _hover={{ boxShadow: "lg" }}
                borderRadius="lg"
                src="https://www.volvobrandshop.com/images/thumbs/0000220_volvo-iron-mark-polo-w_415.jpeg"
              ></Image>
            </Box>
            <Flex justify="center">
              <Text mt={5} fontWeight={500} fontSize={25}>
                Women's Section
              </Text>
            </Flex>
          </Box>
        </Link>

        <Link to="/category/jewelery">
          <Box>
            <Box objectFit="cover" p={1}>
              <Image
                _hover={{ boxShadow: "lg" }}
                borderRadius="lg"
                src="https://assetscdn1.paytm.com/images/catalog/product/J/JE/JEWLUCKY-JEWELLLUCK23826645F7352/1562710861563_0..jpg"
              ></Image>
            </Box>
            <Flex justify="center">
              <Text mt={5} fontWeight={500} fontSize={25}>
                Jewelry's Section
              </Text>
            </Flex>
          </Box>
        </Link>
        <Link to="/category/electronics">
          <Box>
            <Box objectFit="cover" p={1}>
              <Image
                _hover={{ boxShadow: "lg" }}
                borderRadius="lg"
                src="https://m.media-amazon.com/images/I/71cxgcfa5GL._SX679_.jpg"
              ></Image>
            </Box>
            <Flex justify="center">
              <Text mt={5} fontWeight={500} fontSize={25}>
                Electronics Section
              </Text>
            </Flex>
          </Box>
        </Link>
      </SimpleGrid>
    </>
  );
};
