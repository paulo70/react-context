import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';

import {
  Input,
  InputLabel,
  InputAdornment
} from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from 'common/contexts/User';
import { useHistory } from 'react-router-dom';

function Login() {
  const { name, setName, values, setValues } = useContext(UserContext)
  const history = useHistory()

  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
          type="number"
          value={values}
          onChange={(e) => setValues(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              R$
            </InputAdornment>
          }
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/feira')}
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;