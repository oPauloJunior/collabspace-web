import { ThumbsUp, ChatCircleText } from "phosphor-react";

import Avatar from "../Avatar";
import Comment from "../Comment";
import InputArea from "../InputArea";
import Button from "../button";
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
  Interactions,
  CountReaction,
  CountComment,
  InteractionInfo,
  InteractionAction,
  ButtonAction,
  CommentArea,
} from "./styles";
import { useState } from "react";

const Post: React.FC = () => {
  const [commentArea, setCommentArea] = useState(false);

  function toggleCommentArea() {
    setCommentArea(!commentArea);
  }

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

      <Interactions>
        <InteractionInfo>
          <CountReaction>
            <span>
              <ThumbsUp size={19} weight="bold" />
              32
            </span>
          </CountReaction>

          <CountComment>
            <span onClick={toggleCommentArea}>7 Comentários</span>
          </CountComment>
        </InteractionInfo>

        <InteractionAction>
          <ButtonAction>
            <ThumbsUp size={22} />
            Reagir
          </ButtonAction>
          <ButtonAction onClick={toggleCommentArea}>
            <ChatCircleText size={22} />
            Comentar
          </ButtonAction>
        </InteractionAction>
      </Interactions>

      <CommentArea commentArea={commentArea}>
        <CommentForm>
          <h1>Deixe seu comentário</h1>

          <InputArea
            placeholder="Escreva seu comentário..."
            rows={3}
          ></InputArea>

          <Button>Comentar</Button>
        </CommentForm>

        <Divider />

        <Comments>
          <Comment />
        </Comments>
      </CommentArea>
    </Container>
  );
};

export default Post;
