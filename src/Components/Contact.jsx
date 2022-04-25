import { Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Contact = () => {
    
    return (
      <>
        <Heading mt={10} textAlign="center">
          Cantact Us
        </Heading>
        <Text mt={10} fontSize={30}  textAlign="center">
          You want connect with us
        </Text>
        <Image
          margin="30px auto"
          src="https://media2.giphy.com/media/l41Yc2t7ak9BskQa4/giphy.gif"
        ></Image>
      </>
    );
};
