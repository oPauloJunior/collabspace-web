import { Avatar, Container, Info } from "./styles";

const FriendCard: React.FC = () => {
  return (
    <Container>
      <Avatar src="https://cdn.discordapp.com/attachments/1013116744946171915/1101682654543347713/Foto.png" />

      <Info>
        <h1>Roberto Neto</h1>
        <p>8 amigos em comum</p>
      </Info>
    </Container>
  );
};

export default FriendCard;
