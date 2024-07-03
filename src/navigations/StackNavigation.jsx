import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactUs from '../screens/ContactUs';
import BottomTabNavigator from './TabNavigation';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9AC4F8',
        },
        headerTintColor: 'white',
        headerBackTitle: 'Back',
        headerShown: false,
      }}>
      <Stack.Screen name="Tab" component={BottomTabNavigator} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ContactU23s" component={ContactUs} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, ContactStackNavigator};
