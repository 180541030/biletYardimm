import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import Normalize from '../../system/Normalize'
import Colors from '../../system/Colors'

export default class OppartunityAroundCard extends Component {
    render() {
        return (
            <View style={{ width: '47%', height: 130, borderRadius: 5, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <View style={{ width: '100%', height: 85, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={this.props.image} style={{ resizeMode: 'center', width: '150%', height: '150%' }} />
                </View>
                <View style={{ width: '100%', height: 45, backgroundColor: Colors.text.white, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '90%' }}>
                        <Text style={{ fontSize: 17, color: Colors.text.black, fontWeight: 'bold', textAlign: 'left' }}>{this.props.loc}</Text>
                        <Text style={{ fontSize: 13, color: Colors.text.graySoft, fontWeight: 'bold', textAlign: 'left' }}>{this.props.many}₺</Text>
                    </View>
                </View>
            </View>
        )
    }
}
