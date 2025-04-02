import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  HStack,
  VStack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Text,
} from "@chakra-ui/react";

import React from "react";

const ProductCard = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        {/* <Image
          src="https://bit.ly/dan-abramov"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        /> */}
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
