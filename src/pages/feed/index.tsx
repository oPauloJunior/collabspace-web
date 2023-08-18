import LayoutDefault from "../../layouts/default";
import ProfileCard from "../../components/ProfileCard";
import { Posts } from "./styles";
import Post from "../../components/Post";
import CreatePost from "../../components/CreatePost";

const Feed: React.FC = () => {
  return (
    <LayoutDefault>
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
    </LayoutDefault>
  );
};

export default Feed;
