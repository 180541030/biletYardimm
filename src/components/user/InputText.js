import React, { Component } from 'react'
import { TouchableOpacity, View, TextInput, Image } from 'react-native'

import Colors from '../../system/Colors'

export default class InputText extends Component {
    render() {
        return (
            <View style={{ width: '100%', height: 55, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderWidth: 1, borderColor: Colors.ground.gray, borderRadius: 5 }}>
                <View style={{ flex: 8, alignItems: 'flex-start', justifyContent: 'center' }}>
                    
                    <TextInput keyboardType={this.props.keyboardType} onChangeText={this.props.onChangeText} placeholder={this.props.placeholder} maxLength={this.props.maxLength} style={{ width: '100%', height: '90%', fontSize: 20, marginLeft: 5 }} />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                    <Image source={this.props.icon} style={{ resizeMode: 'center', width: 30, height: 30, marginHorizontal: 3 }} />
                </View>
            </View>
        )
    }
}
