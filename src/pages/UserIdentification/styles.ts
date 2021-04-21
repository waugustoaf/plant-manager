import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';

interface InputProps {
  isFocused?: boolean;
  isFilled?: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const KeyboardContainer = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  padding: 0px 54px;
  align-items: center;
`;

export const FormFooter = styled.View`
  margin-top: 40px;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Input = styled.TextInput<InputProps>`
  border-bottom-width: 1px;
  border-color: ${(props) =>
    props.isFocused || props.isFilled
      ? props.theme.colors.green
      : props.theme.colors.gray};
  color: ${(props) => props.theme.colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.heading};
  margin-top: 20px;
`;
