import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {ContactStackNavigator} from './StackNavigation';

import BottomTabsNavigator from './TabNavigation';
import BecomeVolunteerScreen from '../screens/BecomeVolunteerScreen';
import AboutScreen from '../screens/AboutScreen';
import ServicesScreen from '../screens/ServicesScreen';
import OtherProjectsScreen from '../screens/OtherProjectsScreen';
import PodcastScreen from '../screens/PodcastScreen';
import SponsorAProjectScreen from '../screens/SponsorAProjectScreen';
import GiveHelpScreen from '../screens/GiveHelpScreen';
import GetHelpScreen from '../screens/GetHelpScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import DonateNowScreen from '../screens/DonateNowScreen';
import LoginScreen from '../screens/Auth/LoginScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeTabs">
      <Drawer.Screen
        name="HomeTabs"
        component={BottomTabsNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="BecomeVolunteer" component={BecomeVolunteerScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Services" component={ServicesScreen} />
      <Drawer.Screen name="OtherProjects" component={OtherProjectsScreen} />
      <Drawer.Screen name="Podcast" component={PodcastScreen} />
      <Drawer.Screen name="SponsorAProject" component={SponsorAProjectScreen} />
      <Drawer.Screen name="GiveHelp" component={GiveHelpScreen} />
      <Drawer.Screen name="GetHelp" component={GetHelpScreen} />
      <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
      <Drawer.Screen name="DonateNow" component={DonateNowScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
