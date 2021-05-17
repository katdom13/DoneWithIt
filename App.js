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
      // This messes up the vertical alignment
      flexWrap: 'wrap',
      // Set align-content to fix this
      // Only takes effect with wrapping
      alignContent: 'center'
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 300,
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
      <View style={{
        backgroundColor: 'grey',
        width: 100,
        height: 100,
      }}
      />
      {/* By default, if the items overflow along the main axis,
      one or more items get shrunk, so other items can fit on the screen */}
      {/* Change this behavior by enabling wrapping */}
      <View style={{
        backgroundColor: 'greenyellow',
        width: 100,
        height: 100,
      }}
      />
    </View>
  );
}
