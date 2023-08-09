import Avatar from "../Avatar";
import {
  ButtonEdit,
  Container,
  Cover,
  Header,
  Content,
  Divider,
  Footer,
} from "./styles";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Cover src="https://jovemnerd.com.br/wp-content/uploads/2021/12/NC808-game-dev-WALLPAPER.png" />

        <div>
          <Avatar
            src="https://qph.cf2.quoracdn.net/main-qimg-7395016f35224a70dd1b510afe6e5d71-pjlq"
            borderEffect
          />
        </div>
      </Header>

      <Content>
        <h1>Paulo Junior</h1>
        <p>paulojunior2009@outlook.com</p>
      </Content>
      <Divider />

      <Footer>
        <ButtonEdit>Editar Perfil</ButtonEdit>
      </Footer>
    </Container>
  );
};

export default ProfileCard;
