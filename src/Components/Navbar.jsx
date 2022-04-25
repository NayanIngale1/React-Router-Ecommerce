import { Button, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Flex h={16} bg="#212121" position="sticky" top="0" boxShadow="xl">
        <Center>
          <Link to="/">
            <Heading ml={5} fontSize="xl" color="white">
              FakeStore
            </Heading>
          </Link>
        </Center>
        <Spacer />
        <Center>
          <Link to={"/"}>
            {" "}
            <Button
              mr={2}
              variant="ghost"
              color="white"
              _hover={{ color: "teal" }}
            >
              Home
            </Button>
          </Link>

          <Link to="/products">
            <Button
              mr={2}
              variant="gost"
              color="white"
              _hover={{ color: "teal" }}
            >
              Products{" "}
            </Button>
          </Link>

          <Link to="/about">
            <Button
              mr={2}
              variant="gost"
              color="white"
              _hover={{ color: "teal" }}
            >
              About
            </Button>
          </Link>
          <Link to="/FAQ's">
            <Button
              mr={2}
              variant="gost"
              color="white"
              _hover={{ color: "teal" }}
            >
              FAQ's
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              mr={2}
              variant="gost"
              color="white"
              _hover={{ color: "teal" }}
            >
              Contact
            </Button>
          </Link>
          <Button
            mr={2}
            variant="gost"
            color="white"
            _hover={{ color: "teal" }}
          >
            Cart
          </Button>
          <Button
            mr={2}
            variant="gost"
            color="white"
            _hover={{ color: "teal" }}
          >
            Login
          </Button>
        </Center>
      </Flex>
    </>
  );
};

export default Navbar;
