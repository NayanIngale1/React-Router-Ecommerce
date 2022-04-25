import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    getProduct(id);
  }, []);

  const getProduct = (id) => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return isloading ? (
    <Heading textAlign="center" mt={20}>
      Loading...
    </Heading>
  ) : (
    <>
      <SimpleGrid columns={2} m={"20px auto"} gap={10} w={1100} mt={10}>
        <Box p={5}>
          <Text my={2} fontSize="18" color="grey" textDecoration="underline">
            {">"} {product.category}
          </Text>
          <Text my={2} fontSize="30" fontWeight={700}>
            {product.title}
          </Text>
          <Text my={4} fontSize="30" fontWeight={700} color="teal">
            &#x24; {product.price}
          </Text>
          <Text my={2} fontSize="18" color="grey">
            {product.description}
          </Text>
          <Text my={2} fontSize="25" color="grey" fontWeight={700}>
            Rating : {product.rating.rate} &#9734;
          </Text>
          <Text my={2} fontSize="25" color="grey" fontWeight={500}>
            Review : {product.rating.count}
          </Text>
        </Box>
        <Box h={550} boxShadow="xl" borderRadius = 'md' border='1px solid #e7e7e7' p={10}>
          <Image h="100%" w="100%" src={product.image}></Image>
        </Box>
      </SimpleGrid>
    </>
  );
};
