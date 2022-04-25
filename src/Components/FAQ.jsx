import { Heading, Image ,Text} from '@chakra-ui/react'
import React from 'react'

export const FAQ = () => {
  return (
    <>
          <Heading m={10} textAlign="center">FAQ Section</Heading>
          <Text textAlign="center" fontSize={30} mt={10}>You can find your answers Here</Text>
          <Image margin="40px auto" h={ 300}src="https://i.gifer.com/XlO9.gif"></Image>
    </>
  )
}


