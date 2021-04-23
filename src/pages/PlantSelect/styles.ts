import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  padding: 0 25px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 17px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.heading};
`;

export const FlatView = styled.View`
  justify-content: center;
  padding: 32px 5px;
`;

export const PlantsView = styled.View`
  flex: 1;
  justify-content: space-between;
`;
