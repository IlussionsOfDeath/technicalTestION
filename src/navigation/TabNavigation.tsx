import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

//Principal views
import HomeScreen from '../screens/HomeScreen';
//Secondaries views without information
import MoneyScreen from '../screens/MoneyScreen';
import PaymentScreen from '../screens/PaymentScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import NotificationScreen from '../screens/NotificationScreen';

const navOptionHandler = () => ({
    headerShown: false
})

const StackHome = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <StackHome.Navigator
            initialRouteName='HomeScreen'
            screenOptions={ navOptionHandler }
        >
            <StackHome.Screen
                name='Home'
                component={ HomeScreen }
            />
        </StackHome.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            activeColor='#1ca1cb'
            barStyle={{
                backgroundColor: 'white',
                borderTopEndRadius: 10,
                borderTopStartRadius: 10,
                position: 'absolute',
                overflow: 'hidden',
            }}
            inactiveColor='#1b3c59'
            labeled={ false }
        >
            <Tab.Screen
                component={ HomeStack }
                name='HomeStack'
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='home' color={ color } size={ 22 } />
                    )
                }}
            />
            <Tab.Screen
                component={ MoneyScreen }
                name='Money'
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='bag' color={ color } size={ 22 } />
                    )
                }}
                listeners={{
                    tabPress: e => { e.preventDefault() }
                }}
            />
            <Tab.Screen
                component={ PaymentScreen }
                name='Payment'
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='credit-card' color={ color } size={ 22 } />
                    )
                }}
                listeners={{
                    tabPress: e => { e.preventDefault() }
                }}
            />
            <Tab.Screen
                component={ FavoriteScreen }
                name='Favorite'
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='star' color={ color } size={ 22 } />
                    )
                }}
                listeners={{
                    tabPress: e => { e.preventDefault() }
                }}
            />
            <Tab.Screen
                component={ NotificationScreen }
                name='Notification'
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='bell' color={ color } size={ 22 } />
                    )
                }}
                listeners={{
                    tabPress: e => { e.preventDefault() }
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;