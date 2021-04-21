import styled from 'styled-components/native';
import { Dimensions, Platform, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 28px;
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.bold};
  line-height: 34px;
`;

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.text};
`;

export const StyledButton = styled.TouchableOpacity<TouchableOpacityProps>`
  background-color: ${(props) => props.theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 16px;
  height: 56px;
  width: 56px;
`;

export const ButtonIcon = styled(Feather)`
  color: ${(props) => props.theme.colors.white};
  font-size: 32px;
`;
