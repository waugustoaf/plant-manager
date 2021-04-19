import React from "react";
import { StyledButton, ButtonText } from "./styles";

const Button: React.FC = ({ children }) => {
  return (
    <StyledButton activeOpacity={0.8}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;
