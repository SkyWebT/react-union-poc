import React from 'react';
import { Button, Text, View } from 'react-native-web';
import { connect } from 'react-redux';

import { actions, AppState } from '@sky/store';

interface Props {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export const RNCounter: React.FC<Props> = ({ counter, increment, decrement }) => {
  return (
    <View>
      <Text>this is React native typescript counter</Text>
      <Text>{counter}</Text>

      <View style={{ flexDirection: 'row', padding: 20 }}>
        <Button onPress={increment} title="+++"></Button>
        <Button onPress={decrement} title="---"></Button>
      </View>
    </View>
  );
};

export default connect(
  (s: AppState) => ({ counter: s.counter }),
  actions.counter
)(RNCounter);
