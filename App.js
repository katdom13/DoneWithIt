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
        height: 100,
      }}
      />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100,
        top: 20,
        left: 20,
        // Absolute is positioned relative to parent, affects layout
        position: 'absolute',

        // Default position, does not change the layout
        // position: 'relative',
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
