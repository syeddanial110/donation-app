import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const AnnouncementScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Button
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
        title="Open"
      />
      <Text>AnnouncementScreen</Text>
    </View>
  )
}

export default AnnouncementScreen

const styles = StyleSheet.create({})