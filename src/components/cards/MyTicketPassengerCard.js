import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import Colors from '../../system/Colors'

export default class MyTicketPassengerCard extends Component {
    render() {
        return (
            <View style={{ width: '85%', height: 60, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '100%', height: 25, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, color: Colors.text.black, fontWeight: 'bold', textAlign: 'left' }}>Yolcu : </Text>
                    <Text style={{ fontSize: 16, color: Colors.text.red, fontWeight: 'bold', textAlign: 'left' }}>{this.props.name}</Text>
                </View>
                <View style={{ width: '100%', height: 25, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <Image source={require('../../icons/bag-soft.png')} style={{ resizeMode: 'center', width: 17, height: 17 }} />
                    <Text style={{ fontSize: 12, color: Colors.text.gray }} >  {this.props.bagWeight} kg       </Text>
                    <Image source={require('../../icons/flight-seat.png')} style={{ resizeMode: 'center', width: 17, height: 17 }} />
                    <Text style={{ fontSize: 12, color: Colors.text.gray }} >  {this.props.seatNumber}   </Text>
                </View>
            </View >
        )
    }
}
