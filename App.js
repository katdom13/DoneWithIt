import React from 'react';
import {
  View,
} from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks'

export default function App() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      // By default, since this is a mobile device, the default flex-direction is 'column'
      // flex-direction is called main axis
      flexDirection: 'row',
      // Align items along the PRIMARY axis, depends on flexDirection
      justifyContent: 'center',
      // Align items along the SECONDARY axis
      alignItems: 'center',
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 300,
        alignSelf: 'flex-start'
      }}
      />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 200,
      }}
      />
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100,
      }}
      />
    </View>
  );
}
