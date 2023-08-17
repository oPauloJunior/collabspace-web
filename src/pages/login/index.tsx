import { Container, Form, Label, Input, Button, Group } from "./styles";

const Login: React.FC = () => {
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
      </Form>
    </Container>
  );
};

export default Login;
