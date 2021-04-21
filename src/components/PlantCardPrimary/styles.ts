import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background-color: ${(props) => props.theme.colors.shape};
  border-radius: 20px;
  padding: 10px 0;
  align-items: center;
  margin: 0 auto 10px auto;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.green_dark};
  font-family: ${(props) => props.theme.fonts.heading};
  margin: 16px 0;
`;
