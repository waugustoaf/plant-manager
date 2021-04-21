import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;

export const TextsView = styled.View``;

export const TextTop = styled.Text`
  font-size: 32px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.text};
`;

export const TextBottom = styled.Text`
  font-size: 32px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.heading};
  line-height: 40px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;
