import React, { useCallback, useState } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button, ButtonText } from './styles';

interface EnvironmentButtonProps extends RectButtonProps {
  active?: boolean;
}

export const EnvironmentButton: React.FC<EnvironmentButtonProps> = ({
  children,
  active,
  ...rest
}) => {
  return (
    <Button isActive={!!active} {...rest}>
      <ButtonText isActive={!!active}>{children}</ButtonText>
    </Button>
  );
};
