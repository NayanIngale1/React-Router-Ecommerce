import { Flex, Text, HStack, Button, VStack } from "@chakra-ui/react";
// import { EmailIcon } from "@chakra-ui/icons";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Flex h={150} bg={"#212121"} color={"white"} justify={"center"} mt={20}>
        <VStack>
          <Text my={3}>Fake Store By Nayan Ingale | Contact us</Text>
          <HStack>
            <Button colorScheme="facebook" size="sm" leftIcon={<FaFacebook />}>
              <Link to={"/contact"}>Facebook</Link>
            </Button>
            <Button colorScheme="twitter" size="sm" leftIcon={<FaLinkedin />}>
              <Link to={"/contact"}>LinkedIn</Link>
            </Button>
            <Button
              leftIcon={<MdOutlineMail />}
              size="sm"
              colorScheme="teal"
              variant="solid"
            >
              <Link to={"/contact"}>Mail</Link>
            </Button>

            <Button rightIcon={<MdCall />} size="sm" colorScheme="red">
              <Link to={"/contact"}>Call us</Link>
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </>
  );
};
