import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 52px 0 20px 0;

  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
`;

export const Image = styled.Image`
  width: 292px;
  height: 284px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${(props) => props.theme.colors.heading};
`;
