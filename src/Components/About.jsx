import { Heading, Text,Image } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  return (
    <>
      <Heading mt={10} textAlign="center">About Page </Heading>
      <Text textAlign="center" fontSize="30" mt={10} >Welcome to our FakeStore E-commerce website</Text>
          <Image margin="40px auto" borderRadius="lg" src="https://media2.giphy.com/media/3ohhwjUHA9kB6LY0Le/giphy.gif"></Image>
    </>
  )
}


