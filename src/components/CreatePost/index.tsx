import { useState, useCallback, FormEvent } from "react";

import { toast } from "react-toastify";

import Avatar from "../AvatarSquare";
import InputArea from "../InputArea";
import Button from "../Button";

import { useAuthentication } from "../../contexts/Authentication";

import { Container, Form } from "./styles";
import { createPost } from "../../services/posts";
import { IPost } from "../../services/posts/types";

interface CreatePostsProps {
  onCreatePost: (post: IPost) => void;
}

const CreatePost: React.FC<CreatePostsProps> = ({ onCreatePost }) => {
  const { user, me } = useAuthentication();

  const [content, setContent] = useState<string>("");

  const handleCreatePost = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        const { result, message, data } = await createPost({ content });

        if (result === "success") {
          if (data) {
            setContent("");
            onCreatePost(data);
            toast.success(message);
          }
        }
        if (result === "error") toast.error(message);
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [content, onCreatePost],
  );

  return (
    <Container>
      <Avatar
        onClick={() => me(user?.id)}
        avatar={user?.avatarUrl}
        borderEffect
      />
      <Form onSubmit={handleCreatePost}>
        <InputArea
          name="content"
          value={content}
          rows={2}
          placeholder="O que temos para hoje?"
          required
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <Button>Publicar</Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
