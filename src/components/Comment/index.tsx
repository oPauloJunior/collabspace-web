import { Trash } from "phosphor-react";

import Avatar from "../Avatar";
import { AuthorAndTime, CommentBox, Container } from "./styles";

const Comment: React.FC = () => {
  return (
    <Container>
      <Avatar />

      <CommentBox>
        <AuthorAndTime>
          <h1>Paulo Junior</h1>
          <time>Cerca de 2h</time>

          <button>
            <Trash size={22} />
          </button>
        </AuthorAndTime>

        <p>Então continue caminhando otário!</p>
      </CommentBox>
    </Container>
  );
};

export default Comment;
