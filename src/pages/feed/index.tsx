import LayoutDefault from "../../layouts/default";
import ProfileCard from "../../components/ProfileCard";
import { Container, Posts } from "./styles";
import Post from "../../components/Post";
import CreatePost from "../../components/CreatePost";

const Feed: React.FC = () => {
  return (
    <LayoutDefault>
      <Container>
        <ProfileCard />

        <Posts>
          <CreatePost />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Posts>
      </Container>
    </LayoutDefault>
  );
};

export default Feed;
