import { Box, Button, HStack, Text, VStack } from 'native-base';


export const Dashboard: React.FC = () => {
 
  return (
    <VStack
      flex={1}
      width='100%'
      justifyContent='space-between'
      alignItems='center'
      p={4}
      my={30}
    >
      <Text fontSize="sm">
        {'  '} copo de 200 ml
      </Text>


      <VStack>
        <HStack alignItems="center" justifyContent="center">
          <Text fontSize="6xl">
            0
          </Text>
          <Text fontSize="xl">
            {'  '}/ 200 ml
          </Text>
        </HStack>



        <Button
          mt={5}
          colorScheme="primary"         
        >
          Beber água
        </Button>
      </VStack>

      <Box mt={10}>
        <Button.Group >
          <Button  colorScheme="teal">
            Copo americano
          </Button>
          <Button  colorScheme="teal">
            Xicára
          </Button>
          <Button  colorScheme="teal">
            Garrafa
          </Button>
        </Button.Group>
      </Box>

    </VStack>
  );
};