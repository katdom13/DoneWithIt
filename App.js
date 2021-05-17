import React from 'react';
import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks'

export default function App() {

  console.log(useDimensions())

  // Use this hook to detect screen orientation
  const {landscape} = useDeviceOrientation()
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: landscape ? '100%' : '30%',
      }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
