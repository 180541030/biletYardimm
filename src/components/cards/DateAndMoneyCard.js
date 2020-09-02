import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Normalize from '../../system/Normalize'
import Colors from '../../system/Colors'

export default class DateAndMoneyCard extends Component {
    render() {
        return (
            <TouchableOpacity style={{ width: 90, height: '100%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 0.5, borderColor: Colors.ground.gray }}>
                <Text style={{ fontSize: 13, color: Colors.text.gray }}>7 Per</Text>
                <Text style={{ fontSize: 15, color: this.props.SelectedIndex ? Colors.text.red : Colors.text.black, fontWeight: 'bold' }}>3245₺</Text>
            </TouchableOpacity>
        )
    }
}
