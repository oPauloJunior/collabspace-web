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
      <User>
        <Avatar src="https://i.pinimg.com/736x/8f/40/84/8f40845375d4ea238bd8172b377a6c86.jpg" />
        <Info>
          <h1>Genos Ciborg</h1>
          <p>genosgostozao@outlook.netfdsfdsddddddd</p>
        </Info>
      </User>

      <Actions>
        <ButtonAcept>
          <Check size={18} />
        </ButtonAcept>

        <ButtonRecuse>
          <X size={18} />
        </ButtonRecuse>
      </Actions>
    </Container>
  );
};

export default RequestFriend;
