import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const SafeView = styled.View`
  flex: 1;
  padding: ${Platform.OS === 'ios' ? 0 : '40px 0px 20px 0px'};
`;
