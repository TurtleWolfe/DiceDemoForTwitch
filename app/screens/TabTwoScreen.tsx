import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/DiceAssets/DiceAssets/dice1.png')}
      />
      <Image
        style={styles.logo}
        source={require('../assets/images/KeaMotes/179240266_277906763977612_8065245380797413264_n.jpg')}
      />
      <Image
        style={styles.logo}
        source={require('../assets/images/KeaMotes/181125638_134845165298652_5649021405897310867_n.jpg')}
      />
      <Image
        style={styles.logo}
        source={require('../assets/images/KeaMotes/181420999_163589405669623_9071076995908883474_n.jpg')}
      />
      <Image
        style={styles.logo}
        source={require('../assets/images/KeaMotes/Screenshot_2021-05-01 Facebook(1).png')}
      />
      {/* <Text style={styles.title}>Tab Two</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logo: {
    width: 66,
    height: 66,
  },
});
