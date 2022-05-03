import React from "react";
import { Center, Text, Button } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Center>
      <Text
        fontSize={{ base: "lg", md: "lg", lg: "lg" }}
        fontWeight="bold"
        fontStyle="normal"
        fontFamily="Martel"
        color={"#3E485D"}
        noOfLines={2}
        my="10"
        // lineHeight="normal"
      >
        <div className="notfound">
        <div className="notfound-404">
          <h1>4<span>0</span>4</h1>
        </div>
          <a href="/" target="_self" className="homebtn">
            <Button>Go to Homepage</Button>
          </a>
      </div>
      </Text>
      
    </Center>
  );
};

export default ErrorPage;
