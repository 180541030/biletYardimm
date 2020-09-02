import React, { Component } from 'react'
import { Text, View, Picker } from 'react-native'

import Colors from '../../system/Colors'

export default class Pickerr extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "",
        }
    }
    render() {
        return (
            <View style={{ width: '100%', height: 55, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderWidth: 1, borderColor: Colors.ground.gray, borderRadius: 5 }}>
                <Picker
                    selectedValue={this.state.city}
                    style={{ height: "90%", width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ city: itemValue })
                    }>
                    <Picker.Item label="Adana" value="Adana" />
                    <Picker.Item label="Ankara" value="Ankara" />
                </Picker>
            </View>
        )
    }
}
