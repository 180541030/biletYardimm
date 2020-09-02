import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import DatePicker from 'react-native-datepicker'

import Colors from '../system/Colors'
import Normalize from '../system/Normalize'

export default class MyDatePicker extends Component {
    constructor(props) {
        super(props)
        this.state = { date: "2016-05-15" }
    }

    render() {
        return (

            <View style={{ width: '87%', height: 70, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ backgroundColor: Colors.text.white, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 5, overflow: 'hidden' }}>
                    <View style={{ width: '13%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={this.props.icon} style={{ resizeMode: 'contain', width: 30, height: 30 }} />
                    </View>
                    <View style={{ width:  '87%', alignItems: 'center', justifyContent: 'center' }}>
                        <DatePicker
                            style={{ width: '100%'}}
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
                                    width: '96%',
                                    textAlign: 'left', fontSize: 18, color: Colors.text.gray
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}