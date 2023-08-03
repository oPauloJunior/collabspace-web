import Avatar from "../Avatar";
import { ButtonEdit, Container, Cover, Divider } from "./styles";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <header>
        <Cover src="https://jovemnerd.com.br/wp-content/uploads/2021/12/NC808-game-dev-WALLPAPER.png" />

        <div>
          <Avatar />
        </div>
      </header>

      <main>
        <h1>Paulo Junior</h1>
        <p>paulojunior2009@outlook.com</p>
      </main>
      <Divider />

      <footer>
        <ButtonEdit>Editar Perfil</ButtonEdit>
      </footer>
    </Container>
  );
};

export default ProfileCard;
