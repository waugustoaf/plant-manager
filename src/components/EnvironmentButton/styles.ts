import { TextProps } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

interface ButtonProps extends RectButtonProps {
  isActive?: boolean;
}
interface ButtonTextProps extends TextProps {
  isActive?: boolean;
}

export const Button = styled(RectButton)<ButtonProps>`
  background: ${(props) => props.theme.colors.shape};
  height: 40px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-right: 5px;

  ${(props) =>
    props.isActive &&
    css`
      background: ${(props) => props.theme.colors.green_light};
    `}
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.text};

  ${(props) =>
    props.isActive &&
    css`
      font-family: ${(props) => props.theme.fonts.heading};
      color: ${(props) => props.theme.colors.green_dark};
    `}
`;
