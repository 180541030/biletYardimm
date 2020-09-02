import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

import Colors from '../../system/Colors'

export default class TicketDetailInput extends Component {
    render() {
        return (
            <View style={{
                width: this.props.width, height: 45, backgroundColor: this.props.passive ? Colors.ground.gray : Colors.ground.white, alignItems: 'center', justifyContent: 'center', borderColor: Colors.ground.graySoft, borderRadius: 5,
                marginBottom: this.props.marginBottom ? this.props.marginBottom : 0,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,

                elevation: 8,
            }}>
                <TextInput

                    ref={component => this._textInput = component}
                    onTouchStart={this.props.onTouchStart}
                    maxLength={this.props.maxLength}
                    onFocus={this.props.onFocus} onChangeText={this.props.onChangeText}
                    value={this.props.value} editable={this.props.passive ? false : true}
                    keyboardType={this.props.keyboardType} maxLength={this.props.maxLength}
                    placeholder={this.props.placeholder}
                    style={{ width: '95%', height: '100%', fontSize: 18, color: Colors.text.black }} />
                {
                    this.props.speechEnabled ?
                        <TouchableOpacity onPress={this.props.ForgotPassOnPress} style={{ width: "100%", alignItems: 'flex-end', justifyContent: 'center', position: 'absolute' }}>
                            <Image source={require('../../icons/microphone-red.png')} style={{ resizeMode: 'contain', width: 20, height: 20 }} />
                        </TouchableOpacity>
                        :
                        <View />
                }
            </View>
        )
    }
}
