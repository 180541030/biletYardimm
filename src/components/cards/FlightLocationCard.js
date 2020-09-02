import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import Colors from '../../system/Colors'

export default class FlightLocationCard extends Component {
    render() {
        return (
            this.props.landing ?
                <TouchableOpacity onPress={this.props.onPresslanding} style={{ width: '47%', height: 100, backgroundColor: Colors.text.white, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, color: Colors.text.gray, textAlign: 'center' }}>Nereden</Text>
                            <Text style={{ fontSize: 25, color: Colors.text.red, fontWeight: 'bold', textAlign: 'center' }}>
                                {this.props.neredenAir}
                            </Text>
                            <Text style={{ fontSize: 14, color: Colors.text.graySoft, fontWeight: 'bold', textAlign: 'center' }}>
                                {this.props.nereden}
                            </Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Image source={require('../../icons/airplane-takeoff.png')} style={{ resizeMode: 'contain', width: 50, height: 50 }}></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={this.props.onPress} style={{ width: '47%', height: 100, backgroundColor: Colors.text.white, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Image source={require('../../icons/airplane-landing.png')} style={{ resizeMode: 'contain', width: 50, height: 50 }}></Image>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, color: Colors.text.gray, textAlign: 'center' }}>Nereye</Text>
                            <Text style={{ fontSize: 25, color: Colors.text.red, fontWeight: 'bold', textAlign: 'center' }}>
                                {this.props.nereyeAir}

                            </Text>
                            <Text style={{ fontSize: 14, color: Colors.text.graySoft, fontWeight: 'bold', textAlign: 'center' }}>
                                {this.props.nereye}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
        )
    }
}
