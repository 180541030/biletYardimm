import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import Colors from '../../system/Colors'

export default class Title extends Component {
    render() {
        return (
            <View style={{ width: '100%', height: 40, alignItems: 'flex-start', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, color: Colors.text.black, fontWeight: 'bold' }}>{this.props.text}</Text>
            </View>
        )
    }
}