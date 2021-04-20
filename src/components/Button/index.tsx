import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonText, Container } from './styles';

export interface ButtonProps extends TouchableOpacityProps {
  isEmpty?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isEmpty, ...rest }) => {
  return (
    <Container {...rest} isEmpty={isEmpty}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
