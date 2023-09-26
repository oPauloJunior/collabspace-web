import { useAuthentication } from "../../contexts/Authentication";
import { IReaction } from "../../services/reactions/types";
import AvatarCircle from "../AvatarCircle";
import {
  Container,
  Title,
  NavBar,
  Reaction,
  Reactions,
  AuthorInfo,
  NoReactions,
} from "./styles";

interface ReactionListProps {
  data: IReaction[];
}

const ReactionList: React.FC<ReactionListProps> = ({ data }) => {
  const { me } = useAuthentication();

  return (
    <Container>
      <Title>Reações</Title>

      <NavBar>Todas {data.length}</NavBar>

      <Reactions>
        {data.length ? (
          data.map((reaction) => (
            <Reaction key={reaction.id}>
              <AvatarCircle
                size="56px"
                avatar={reaction.user.avatarUrl}
                onClick={() => me(reaction.user.id)}
              />

              <AuthorInfo onClick={() => me(reaction.user.id)}>
                <h1>{reaction.user.name}</h1>
                <p>{reaction.user.email}</p>
              </AuthorInfo>
            </Reaction>
          ))
        ) : (
          <NoReactions>Ninguem reagiu a isto!</NoReactions>
        )}
      </Reactions>
    </Container>
  );
};

export default ReactionList;
