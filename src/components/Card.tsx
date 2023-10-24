import { Box, Center } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
  return (
    <Center>
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px" maxWidth={'400px'}>
        { children }
      </Box>
    </Center>
  );
};
