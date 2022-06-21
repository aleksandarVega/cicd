import React from 'react';
import {YellowText} from './YellowText';
import {render} from '@testing-library/react-native';

test('test the `<YellowText/>` value', () => {
  const component = render(<YellowText />);
  const textField = component.getByTestId('text');
  expect(textField.props.children).toMatch('Hey dudes!');
});
