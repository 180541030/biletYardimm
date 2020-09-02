import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import Colors from '../../system/Colors'

export default class TicketDetailTitle extends Component {
    render() {
        return (
            <View style={{ width: '100%', height: 40, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '90%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <View style={{ width: 35, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Image source={this.props.image} style={{ resizeMode: 'center', width: 22, height: 22 }} />
                    </View>
                    <Text style={{ fontSize: 18, color: Colors.text.black, fontWeight: 'bold' }}>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}
