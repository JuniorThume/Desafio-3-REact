import { Box, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import CardInfo from "../components/CardInfo"
import { AppContext } from "../components/AppContext"
import React from "react"

interface UserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

const Conta = () => {
  const [ userData, setUserData ] = useState<null | UserData>()
  const { id } = useParams()
  const navigate = useNavigate()

  const { isLoggedIn } = useContext(AppContext)

  !isLoggedIn && navigate('/')

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }

      getData()
  }, [])

  const actualData = new Date()

  if(userData && id !== userData.id) {
    navigate('/')
  }

  return (
    <Center>
      <SimpleGrid columns={1} spacing={4} paddingTop={16}>
        {
          userData === undefined || userData === null ?
            (  
              <Center>
                <Spinner size='xl' color='white'/>
                  </Center>
            ) : 
            (
              <React.Fragment>
                <Box background={'white'} padding={2} borderRadius={'25px'}>
                  <CardInfo
                    mainContent={`Bem vindo(a) ${userData?.name}`}
                    content={`${actualData.getDate() < 10 ? '0' + actualData.getDay() : actualData.getDate()} /
                    ${actualData.getMonth() < 10 ? '0' + actualData.getMonth(): actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} />
                </Box>
                <Box background={'white'} padding={2} borderRadius={'25px'}>
                  <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`}/>
                </Box>
                <Center>
                  <Link to={'/infoconta'}>
                    <Text color={'white'}>
                      Ir para informações da conta
                    </Text>
                  </Link>
                </Center>
                  </React.Fragment>
            )
        }
      </SimpleGrid>    
    </Center>
  )
}

export default Conta
