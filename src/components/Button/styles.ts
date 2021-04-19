import styled from "styled-components/native";

export const StyledButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 16px;
  height: 56px;
  width: 56px;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 24px;
`;
