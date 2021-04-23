import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px 0 30px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const SpotLight = styled.View`
  background-color: ${(props) => props.theme.colors.blue_light};
  padding: 0 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpotLightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotLightText = styled.Text`
  flex: 1;
  color: ${(props) => props.theme.colors.blue};
  padding: 0 20px;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.heading};
  margin: 20px 0;
`;
