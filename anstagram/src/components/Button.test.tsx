import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { Button } from "./Button";
import { Typography } from "./Typography";

test('Button Test', async () => {
  const onPressed = jest.fn();
  const expectedButtonName = 'TEST_BUTTON_2';
  
  render(
    <Button onPress={onPressed}>
      <Typography>{expectedButtonName}</Typography>
    </Button>
  );

  expect(screen.toJSON()).toMatchSnapshot();

  // 이벤트 발생시킴
  fireEvent.press(screen.getByText(expectedButtonName));

  // onPressed callback이 호출이 되었는지 검증
  expect(onPressed).toHaveBeenCalled();
});