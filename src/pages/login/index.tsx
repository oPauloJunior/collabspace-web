import { useNavigate } from "react-router-dom";

import {
  Container,
  Form,
  Label,
  Input,
  Button,
  Group,
  LinkRegister,
} from "./styles";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <Container>
      <Form>
        <h1>Entrar</h1>

        <Group>
          <Label htmlFor="">Endereço de email</Label>
          <Input type="text" required placeholder="Digite seu email" />
        </Group>

        <Group>
          <Label htmlFor="">Senha secreta</Label>
          <Input type="password" required placeholder="Digite sua senha" />
        </Group>

        <Button>Fazer login</Button>

        <LinkRegister>
          <p>Novo no Collabspace?</p>
          <a onClick={handleRegister}>Cadastre-se agora!</a>
        </LinkRegister>
      </Form>
    </Container>
  );
};

export default Login;
