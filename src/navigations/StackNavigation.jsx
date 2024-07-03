import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactUs from '../screens/ContactUs';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import AnnouncementDetailScreen from '../screens/AnnouncementDetailScreen';
import EventsDetailScreen from '../screens/EventsDetailScreen';
import ProgramDetailScreen from '../screens/ProgramDetailScreen';
import MonthlyDonateScreen from '../screens/MonthlyDonateScreen';
import InKindDonationScreen from '../screens/InKindDonationScreen';
import PayByChequeScreen from '../screens/PayByChequeScreen';
import GiveNowByCreditCardScreen from '../screens/GiveNowByCreditCardScreen';
import SponsorshipFormScreen from '../screens/SponsorshipFormScreen';
import DrawerNavigation from './DrawerNavigation';

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
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="AnnouncementDetail"
        component={AnnouncementDetailScreen}
      />
      <Stack.Screen name="EventsDetail" component={EventsDetailScreen} />
      <Stack.Screen name="ProgramDetail" component={ProgramDetailScreen} />
      <Stack.Screen name="MonthlyDonate" component={MonthlyDonateScreen} />
      <Stack.Screen name="InKindDonation" component={InKindDonationScreen} />
      <Stack.Screen name="PayByCheque" component={PayByChequeScreen} />
      <Stack.Screen
        name="GiveNowByCreditCard"
        component={GiveNowByCreditCardScreen}
      />
      <Stack.Screen name="SponsorshipForm" component={SponsorshipFormScreen} />
    </Stack.Navigator>
  );
};



export {MainStackNavigator};
