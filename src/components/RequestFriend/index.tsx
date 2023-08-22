import { Check, X } from "phosphor-react";

import {
  Actions,
  Avatar,
  ButtonAcept,
  ButtonRecuse,
  Container,
  Info,
  User,
} from "./styles";

const RequestFriend: React.FC = () => {
  return (
    <Container>
      <Avatar src="https://i.pinimg.com/736x/8f/40/84/8f40845375d4ea238bd8172b377a6c86.jpg" />
      <User>
        <Info>
          <h1>Genos Ciborg</h1>
          <p>genosgostozao@outlook.net</p>
        </Info>
      </User>

      <Actions>
        <ButtonAcept>
          <Check />
        </ButtonAcept>

        <ButtonRecuse>
          <X />
        </ButtonRecuse>
      </Actions>
    </Container>
  );
};

export default RequestFriend;
