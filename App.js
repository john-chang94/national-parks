import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from './src/components/background';
import AppNavigator from './src/navigation/AppNavigator';

import { isAndroid, statusBar } from './src/services/sysChecks';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Background /> */}
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid ? statusBar : 5,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
