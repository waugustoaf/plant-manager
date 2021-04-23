import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const SafeView = styled.View`
  flex: 1;
  padding: ${Platform.OS === 'ios'
    ? `${getStatusBarHeight()}px 0px 0px 0px`
    : '30px 0px 0px 0px'};
`;
