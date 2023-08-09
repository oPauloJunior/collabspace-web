import Avatar from "../Avatar";
import Comment from "../Comment";
import {
  Container,
  Content,
  Hastags,
  Divider,
  Comments,
  Header,
  AuthorInfo,
  Author,
  Description,
  CommentForm,
  ButtonComment,
  InputArea,
} from "./styles";

const Post: React.FC = () => {
  return (
    <Container>
      <Header>
        <Author>
          <Avatar
            src="https://qph.cf2.quoracdn.net/main-qimg-7395016f35224a70dd1b510afe6e5d71-pjlq"
            borderEffect
          />

          <AuthorInfo>
            <h1>Paulo Junior</h1>
            <p>paulojunior2009@outlook.com</p>
          </AuthorInfo>
        </Author>

        <time>Publicado à 1h</time>
      </Header>

      <Content>
        <Description>
          <p>Fala Galera</p>

          <p>O caminho é longo e a derrota é certa!</p>
        </Description>

        <Hastags>
          <span>#collabspace</span>
          <span>#confia</span>
        </Hastags>
      </Content>

      <Divider />

      <CommentForm>
        <h1>Deixe seu comentário</h1>

        <InputArea name=""></InputArea>

        <ButtonComment>Comentar</ButtonComment>
      </CommentForm>

      <Divider />

      <Comments>
        <Comment />
      </Comments>
    </Container>
  );
};

export default Post;
