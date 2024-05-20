import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Button } from "./Button";
import { Typography } from "./Typography";

test('Button Test', async () => {
  const onPressed = () => {};
  const expectedButtonName = 'TEST_BUTTON_2';
  
  render(
    <Button onPress={onPressed}>
      <Typography>{expectedButtonName}</Typography>
    </Button>
  );

  expect(screen.toJSON()).toMatchSnapshot();
});