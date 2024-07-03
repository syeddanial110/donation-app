import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const ProgramsScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
        title="Open"
      />
      <Text>ProgramsScreen</Text>
    </View>
  )
}

export default ProgramsScreen

const styles = StyleSheet.create({})