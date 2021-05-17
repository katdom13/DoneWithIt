import React from 'react';
import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default function App() {

  // Dimensions of the device screen
  // Does not respond to orientation changes
  console.log(Dimensions.get('screen'))

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        // Takes half of the screen width
        width: '50%',
        height: 70,
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
