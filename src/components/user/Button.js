import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Colors from '../../system/Colors'

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{ width: '100%', height: 55, backgroundColor: Colors.ground.red, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                <Text style={{ color: Colors.text.white, fontSize: 20 }} >{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}
