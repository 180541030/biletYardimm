import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import Colors from '../../system/Colors'

export default class ProfileButton extends Component {
    render() {
        return (
            <View style={{ width: "90%", height: 60, backgroundColor: Colors.ground.white, alignItems: "center", justifyContent: "flex-start", flexDirection: 'row',marginVertical:10, shadowColor: "#000", shadowOffset: { width: 0, height: 5, }, shadowOpacity: 0.34, shadowRadius: 9.27, elevation: 10 }}>
                <Image source={this.props.image} style={{ resizeMode: 'contain', width: 27, height: 27, marginHorizontal: 17 }} />
                <Text style={{ fontSize: 16, color: Colors.text.grayDark, textAlign: "center" }}>{this.props.text}</Text>
                <TouchableOpacity onPress={this.props.onPress} style={{ width: "100%", height: "100%", alignItems: "flex-end", justifyContent: "center", position: "absolute" }}>
                    <Image source={require('../../icons/right-red.png')} style={{ resizeMode: 'contain', width: 17, height: 17, marginRight: 15 }} />
                </TouchableOpacity>
            </View>
        )
    }
}
