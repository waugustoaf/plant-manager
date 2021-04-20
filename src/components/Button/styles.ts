import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<any>`
  background-color: ${(props) =>
    props.isEmpty ? props.theme.colors.green_light : props.theme.colors.green};
  height: 56px;
  border-radius: 16px;
  min-width: 85%;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  text-align: center;
  padding: 15px 40px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 16px;
`;
