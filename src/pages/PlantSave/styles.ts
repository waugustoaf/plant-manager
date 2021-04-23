import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
`;
export const PlantInfo = styled.View`
  flex: 1;
  padding: 50px 30px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
`;

export const BackButton = styled.TouchableWithoutFeedback``;

export const PlantName = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 24px;
  color: ${(props) => props.theme.colors.heading};
  margin-top: 15px;
`;

export const PlantAbout = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.heading};
  font-size: 17px;
  margin-top: 10px;
`;

export const Controller = styled.View`
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.blue};
  font-size: 17px;
  text-align: justify;
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.complement};
  color: ${(props) => props.theme.colors.heading};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const RegisterButton = styled(RectButton)`
  background-color: ${(props) => props.theme.colors.green};
  border-radius: 12px;
  height: 56px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.white};
`;

export const DateTimeContainer = styled.View`
  padding: 5px 0 20px 0;
  justify-content: center;
  align-items: center;
`;

export const DateTimePickerButton = styled.TouchableOpacity``;

export const DataTimePickerTimeText = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 20px;
`;

export const DataTimePickerChangeText = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 14px;
`;
