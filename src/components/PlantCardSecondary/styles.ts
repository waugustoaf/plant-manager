import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.shape};
  margin-bottom: 5px;
`;

export const ButtonTitle = styled.Text`
  flex: 1;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.heading};
  margin-left: 10px;
  font-size: 17px;
`;

export const Details = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.body_dark};
`;
