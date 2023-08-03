import Avatar from "../Avatar";
import { Container, Content, Hastags, Divider } from "./styles";

const Post: React.FC = () => {
  return (
    <Container>
      <header>
        <div>
          <Avatar />

          <section>
            <h1>Paulo Junior</h1>
            <p>paulojunior2009@outlook.com</p>
          </section>
        </div>

        <p>Publicado à 1h</p>
      </header>

      <main>
        <Content>
          <p>Fala Galera</p>

          <p>O caminho é longo e a derrota é certa!</p>
        </Content>

        <Hastags>
          <span>#collabspace</span>
          <span>#confia</span>
        </Hastags>
      </main>

      <Divider />

      <footer>
        <h1>Deixe seu comentário</h1>

        <textarea name=""></textarea>

        <button>Comentar</button>
      </footer>
    </Container>
  );
};

export default Post;
