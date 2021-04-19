import React from "react";
import { Container, Image, SubTitle, Title } from "./styles";

import { FiChevronRight } from "react-icons/fi";

import wateringImg from "../../assets/watering.png";
import Button from "../../components/Button";

const Welcome: React.FC = () => {
  return (
    <Container>
      <Title>
        Gerencie {`\n`}
        suas plantas {`\n`}
        de forma fácil
      </Title>

      <Image source={wateringImg} />

      <SubTitle>
        Não esqueça de regar suas plantas. Nós cuidamos de lembrar você sempre
        que precisar.
      </SubTitle>

      <Button>{`>`}</Button>
    </Container>
  );
};

export default Welcome;
