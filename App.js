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
        // flexBasis: 100, // either width or height, depending on main axis
        // flex: 1,

        // If overflowing, this item can get shrunk
        flexShrink: 1,
        // flex: -1
        width: 400,
        height: 100,
      }}
      />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100,
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
