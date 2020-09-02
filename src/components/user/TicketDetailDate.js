import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import DatePicker from 'react-native-datepicker'

import Colors from '../../system/Colors'

export default class TicketDetailDate extends Component {
    constructor(props) {
        super(props)
        this.state = { date: "2016-05-15" }
    }

    render() {
        return (
            <View style={{ width: '100%', height: 55, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderWidth: 1, borderColor: Colors.ground.gray, borderRadius: 5 }}>
                <View style={{ flex: 8, alignItems: 'flex-start', justifyContent: 'center' }}>
                    <DatePicker
                        style={{ width: '100%' }}
                        date={this.state.date}
                        showIcon={false}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="1930-05-01"
                        maxDate="2030-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            },
                            dateInput: {
                                borderWidth: 0
                            },
                            dateText: {
                                width: '100%',
                                textAlign: 'left', fontSize: 20, color: Colors.text.gray, marginLeft:15
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={this.props.onDateChange}
                    // onDateChange={(date) => { this.setState({ date: date }) }}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                    <Image source={this.props.icon} style={{ resizeMode: 'center', width: 30, height: 30, marginHorizontal: 3 }} />
                </View>
            </View>
        )
    }
}