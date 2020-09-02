import React from 'react';
import { Text, View, Image } from 'react-native';
import { createAppContainer, NavigationEvents } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Colors from '../system/Colors'

import Tickets from '../pages/Tickets'
import Hotel from '../pages/Hotel'
import Transfer from '../pages/Transfer'

const TabNavigator = createBottomTabNavigator({

    Bilet: Tickets,
    Otel: Hotel,
    Transfer: Transfer,
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {

                const { routeName } = navigation.state;
                if (routeName === 'Bilet') {
                    iconName = `${focused ? require('../icons/ticket-red.png') : require('../icons/ticket.png')}`;

                } else if (routeName === 'Otel') {
                    iconName = `${focused ? require('../icons/hotel-red.png') : require('../icons/hotel.png')}`;
                }
                else if (routeName === 'Transfer') {
                    iconName = `${focused ? require('../icons/transfer-red.png') : require('../icons/transfer.png')}`;
                }

                return <Image style={{ width: 25, height: 25 }} source={iconName}></Image>;
            },
        }),
        tabBarOptions: {
            showLabel: true,
            activeTintColor: Colors.text.red
        },
        navigationOptions: { header: null }
    }

);

export default createAppContainer(TabNavigator);