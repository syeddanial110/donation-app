import {View, Text, Button} from 'react-native';
import React from 'react';
import {DrawerActions} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
        title="Open"
      />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
