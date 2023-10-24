import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../components/AppContext";
import CardInfo from "../components/CardInfo";

const ContaInfo = () => { 


  const { user, email } = useContext(AppContext);


  return (
    <React.Fragment>
      <Center>
        <SimpleGrid paddingTop={16} column={1} spacing={4}>
          <Box background={'white'} borderRadius={'25px'} padding={4} maxWidth={'400px'} minHeight={'120px'}>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            <CardInfo  
              mainContent="Nome:"
              content={user}/>

            <CardInfo
              mainContent="Email:"
              content={email}/>
            
          
            <Link to='/conta/1' >
              <Text marginTop={'30px'} fontSize='l' color={'purple.500'}>
                Ir para a página de conta
              </Text>
            </Link>
          </Box>
        </SimpleGrid>
      </Center>
    </React.Fragment>
  )
}

export default ContaInfo
