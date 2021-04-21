import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  padding: 0px 45px;
  align-items: center;
`;

export const FormFooter = styled.View`
  margin-top: 20px;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.heading};
  margin-top: 20px;
  width: 100%;
`;

export const Text = styled.Text`
  font-size: 17px;
  width: 100%;
  line-height: 22px;
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.text};
  margin-top: 30px;
`;
