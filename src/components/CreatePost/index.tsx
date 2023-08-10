import Avatar from "../Avatar";
import InputArea from "../InputArea";
import Button from "../button";
import { Container, Content } from "./styles";

const CreatePost: React.FC = () => {
  return (
    <Container>
      <Content>
        <Avatar
          src="https://qph.cf2.quoracdn.net/main-qimg-7395016f35224a70dd1b510afe6e5d71-pjlq"
          borderEffect
        />

        <InputArea placeholder="O que temos para hoje?" rows={2} />
      </Content>

      <Button>Publicar</Button>
    </Container>
  );
};

export default CreatePost;
