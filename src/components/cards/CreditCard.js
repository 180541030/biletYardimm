import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import Colors from '../../system/Colors'

export default class CreditCard extends Component {
    render() {
        return (
            !this.props.isBack
                ?
                <View style={{ width: 250, height: 200, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <View style={{ width: "100%", height: "100%", alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../images/CreditCard.png')} style={{ resizeMode: 'contain', width: '95%', height: '90%' }} />
                    </View>

                    <View style={{ width: 50, height: 50, alignItems: "flex-start", justifyContent: "center", position: "absolute", top: 55, left: 20 }}>
                        <Image source={this.props.bankIcon} style={{ resizeMode: 'contain', width: '80%', height: '80%' }} />
                    </View>

                    <View style={{ height: 30, alignItems: 'flex-start', justifyContent: "center", flexDirection: "row", position: "absolute", top: 100, left: 20 }}>
                        <Text style={{ fontSize: 15, color: Colors.text.whiteDark2 }}>{this.props.cardNumber}</Text>
                    </View>

                    <View style={{ width: 145, height: 30, justifyContent: "center", position: "absolute", top: 130, left: 20 }}>
                        <Text numberOfLines={1} style={{ fontSize: 15, color: Colors.text.whiteDark2 }}>{this.props.name}</Text>
                    </View>

                    <View style={{ height: 30, justifyContent: "center", position: "absolute", top: 130, left: 20 }}>
                        <Text style={{ fontSize: 15, color: Colors.text.whiteDark2 }}>                                        {this.props.cardDate}</Text>
                    </View>

                    <TouchableOpacity onPress={this.props.onPress} style={{ width: 20, height: 20, position: "absolute", top: "17%", right: "5%", alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../icons/delete.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                    </TouchableOpacity>
                </View>
                :
                <View style={{ width: 250, height: 200, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <View style={{ width: "100%", height: "100%", alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../images/CreditCard.png')} style={{ resizeMode: 'contain', width: '95%', height: '90%' }} />
                    </View>

                    <View style={{ height: 30, alignItems: 'center', backgroundColor: Colors.ground.white, width: '80%', justifyContent: "center", flexDirection: "row", position: "absolute", top: 100, left: 20 }}>
                        <View style={{ height: 30, width: '80%', backgroundColor: 'black' }} />
                        <Text style={{ marginLeft: 10, width: '20%', fontSize: 15, color: Colors.text.black }}>{this.props.cvc_ccv.length > 0 ? this.props.cvc_ccv : "* * * "}</Text>
                    </View>

                    <TouchableOpacity onPress={this.props.onPress} style={{ width: 20, height: 20, position: "absolute", top: "17%", right: "5%", alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../icons/delete.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                    </TouchableOpacity>
                </View>
        )
    }
}
