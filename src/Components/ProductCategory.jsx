import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Heading, Image, Text, Box, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const ProductCategory = () => {
  const { id } = useParams();

  const [products, setProducts] = useState();
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    getProducts(id);
  }, []);

  const getProducts = (id) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${id}`)
      .then((res) => {
        setProducts(res.data);
        // console.log('res.data:', res.data)
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return isloading ? (
    <Heading textAlign="center" mt={20}>
      Loading...
    </Heading>
  ) : (
          <>
           <Heading mt={10} textAlign="center">
        {id} Products
      </Heading>
      <Grid gap={8} m={"40px auto"} maxW={1200} templateColumns="repeat(4,1fr)">
        {products.map((d) => (
          <Link to={`/products/${d.id}`}>
            <Box
              key= {d.id}
              h={420}
              p={5}
              boxShadow="md"
              overflow="hidden"
              _hover={{ boxShadow: "outline" }}
            >
              <Box h={250} w={250} p={1}>
                <Image h="100%" w="100%" src={d.image}></Image>
              </Box>
              <Text fontSize={18}>{d.title}</Text>
                    <Text fontSize={14} color="#aaaaaa" mt={2}>
                Rating : {d.rating.rate} &#9734;
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>   
    </>
  );
};
