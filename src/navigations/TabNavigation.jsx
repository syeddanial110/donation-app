import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ContactStackNavigator, MainStackNavigator} from './StackNavigation';
import HomeScreen from '../screens/HomeScreen';
import ContactUs from '../screens/ContactUs';
import {Image, Text} from 'react-native';
// import homeIcon from '../assets/icons'
import AwesomeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AnnouncementScreen from '../screens/AnnouncementScreen';
import EventsScreen from '../screens/EventsScreen';
import ProgramsScreen from '../screens/ProgramsScreen';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Announcement" component={AnnouncementScreen} />
      <Tab.Screen name="Donate Now" component={AnnouncementScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Programs" component={ProgramsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
