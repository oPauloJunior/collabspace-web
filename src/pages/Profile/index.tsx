import RequestFriend from "../../components/RequestFriend";
import LayoutDefault from "../../layouts/default";
import {
  Avatar,
  Contact,
  Container,
  Content,
  Cover,
  General,
  Overview,
  Requests,
  Total,
  Sidebar,
  UserInfo,
  RequestList,
} from "./styles";

const Profile: React.FC = () => {
  return (
    <LayoutDefault>
      <Container>
        <Content>
          <Overview>
            <Cover src="https://jovemnerd.com.br/wp-content/uploads/2021/12/NC808-game-dev-WALLPAPER.png" />
            <Avatar src="https://qph.cf2.quoracdn.net/main-qimg-7395016f35224a70dd1b510afe6e5d71-pjlq" />
            <UserInfo>
              <General>
                <h1>Paulo Junior</h1>
                <p>É que eu sou Dev!</p>

                <Total>
                  <span>
                    <strong>115</strong> publicações
                  </span>
                  <span>
                    <strong>1598</strong> amigos
                  </span>
                </Total>
              </General>

              <Contact>
                <span>Jaborandi, São Paulo, Brasil</span>
                <span>(17) 99244-4281</span>
                <span>Entrou em Fevereiro de 2023</span>
              </Contact>
            </UserInfo>
          </Overview>
        </Content>

        <Sidebar>
          <Requests>
            <h1>Solicitações de amizade</h1>

            <RequestList>
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
            </RequestList>
          </Requests>
        </Sidebar>
      </Container>
    </LayoutDefault>
  );
};

export default Profile;
