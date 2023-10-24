import { Box, Center, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const md5 = require('md5');
  const [ email, setEmail ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  const { setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const validateUser = async (email: string, password: string) => {
  const loggedIn = await login(email, password)

  if(!loggedIn){
    return alert('Login inválido')
  }

  setIsLoggedIn(true)
  changeLocalStorage({ login: true })
  navigate('/conta/1')
  }

  return (
    <Box padding="25px">
      <Card>
        <Center>
          <Text fontSize={'xl'} marginBottom={'10px'}>
            Faça o login
          </Text>
          </Center>
          <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} focusBorderColor={'purple.400'}/>
          <Input placeholder="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} margin={'10px 0 10px 0'} focusBorderColor={'purple.400'}/>
        <Center>
          <DButton
            onClick={() => validateUser(email, md5(password))}
          />
        </Center>
      </Card>
    </Box>
  );
}

export default Home;
