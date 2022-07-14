import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Navigation with material-bottom-tabs
import TabNavigation from './TabNavigation'
//Details of movements view
import HomeDetailScreen from '../screens/HomeDetailScreen';
//New request view
import RequestDetailScreen from '../screens/RequestDetailScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name='TabNavigation'
                component={ TabNavigation }
            />
            <Stack.Screen
                name='HomeDetail'
                component={ HomeDetailScreen }
            />
            <Stack.Screen
                name='RequestDetail'
                component={ RequestDetailScreen }
            />
        </Stack.Navigator>
    )
}

export default StackNavigation;