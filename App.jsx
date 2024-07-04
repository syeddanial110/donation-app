/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { mainBgColor } from './src/assets/Colors/colors';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/navigations/StackNavigation';
import DrawerNavigation from './src/navigations/DrawerNavigation';
import BottomTabsNavigator from './src/navigations/TabNavigation';
import 'react-native-gesture-handler';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: mainBgColor }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <StatusBar backgroundColor={mainBgColor} />
        <NavigationContainer>
          {/* <BottomTabNavigator /> */}
          <MainStackNavigator />
          {/* <BottomTabsNavigator /> */}
        </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
