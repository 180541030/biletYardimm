import React, { Component } from 'react'
import { Text, View, Image ,TouchableOpacity} from 'react-native'

import Colors from '../../system/Colors' 

export default class AddPassengerCard extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{ width: 105, height: 80, alignItems: 'center', justifyContent: 'flex-end', marginHorizontal: 7 }}>
                <View style={{ width: "100%", height: 65, backgroundColor: Colors.text.white, alignItems: 'center', justifyContent: 'center', borderRadius: 8, shadowColor: "#000", shadowOffset: { width: 0, height: 5, }, shadowOpacity: 0.34, shadowRadius: 9.27, elevation: 10 }}>
                    <Text style={{ fontSize: 16, color: Colors.text.grayDark, textAlign: "center" }}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}