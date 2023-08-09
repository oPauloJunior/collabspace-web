import { Trash } from "phosphor-react";

import Avatar from "../Avatar";
import { AuthorAndTime, ButtonDelete, CommentBox, Container } from "./styles";

const Comment: React.FC = () => {
  return (
    <Container>
      <Avatar src="https://i1.sndcdn.com/artworks-o0m6E25xFEkcNEA6-fNMSxg-t500x500.jpg" />

      <CommentBox>
        <AuthorAndTime>
          <h1>James Salada de Frutas</h1>
          <time>Cerca de 2h</time>

          <ButtonDelete>
            <Trash size={22} />
          </ButtonDelete>
        </AuthorAndTime>

        <p>Olha que habilidade</p>
      </CommentBox>
    </Container>
  );
};

export default Comment;
