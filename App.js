import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  StatusBar,
  TouchableOpacity,
  Button,
  ScrollView,
  Alert
} from 'react-native';

export default function App() {

  // Does not work on android
  // const handleOwlImagePress = () => Alert.prompt("Owl Image Tapped",
  //   "What is the name of this owl?",
  //   text => console.log(text),
  // )

  const handleOwlImagePress = () => Alert.alert("Owl Image Tapped",
    "This owl's name is Numnums",
    [
      {
       text: 'Cancel'
      },
      {
        text: 'Ok',
        onPress: () => console.log('Met Numnums'),
      }
    ]
  )


  return (
    // SafeAreaView does not work on android
    <SafeAreaView style={styles.container}>

      {/* For scrolling */}
      <ScrollView contentContainerStyle={styles.scrollView}>

      {/* Buttons and Alerts */}
      <Button
        title="Click Me"
        style={styles.button}
        color="pink"
        onPress={() => Alert.alert("Alert", "Button Tapped")}
      />

      <Text numberOfLines={2} onPress={() => console.log('Text pressed')}>
        Hello React Native - This is a very very loooooooong text! This should demonstrate some args for Text component.
      </Text>

      {/* Since the image component does not have an 'onPress' event,
        We can wrap it in a 'Touchable' component
      */}
      <TouchableOpacity onPress={handleOwlImagePress} activeOpacity={0.8}>
        {/* Require includes the picture in the bundler. This makes the app larger */}
        <Image source={require('./assets/channels4_banner.jpg')} />
      </TouchableOpacity>

      {/* It is more appropriate to download from the web */}
      {/* But it is required to specify the dimensions */}
      <Image
        source={{width: 400, height: 400, uri: 'https://reactjs.org/logo-og.png'}}
        // Blurs the picture
        blurRadius={1}
        // Gives a fade effect (works only on android)
        fadeDuration={1000}
      />
      <StatusBar style="auto" />

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // Manually fix margin to get out of statusbar
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
  }
});
