import React from 'react';
import {Text} from 'react-native';

export const YellowText = () => (
  <Text
    testID="text"
    style={{color: 'yellow', fontSize: 40, backgroundColor: 'blue'}}
  >
    Hey dude!
  </Text>
);
