import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CustomDrawer = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('BecomeVolunteer')}>
                <Text>Become a volunteer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                <Text>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('OtherProjects')}>
                <Text>OtherProjects</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomDrawer