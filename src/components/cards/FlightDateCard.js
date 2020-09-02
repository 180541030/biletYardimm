import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DatePicker from 'react-native-datepicker'

import Normalize from '../../system/Normalize'
import Colors from '../../system/Colors'

export default class FlightDateCard extends Component {
    constructor(props) {
        super(props)
        this.state = { date: "2016-05-15" }
    }

    render() {
        return (
            this.props.return ?
                this.props.oneWay == false ?
                    <View style={{ width: '47%', height: 80, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '100%', height: 50, backgroundColor: Colors.ground.white, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <DatePicker
                                    style={{ width: '100%', }}
                                    date={this.state.date}
                                    showIcon={false}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    minDate="2018-05-01"
                                    maxDate="2022-06-01"
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
                                            width: '85%',
                                            textAlign: 'right', fontWeight: 'bold', fontSize: 20, color: Colors.text.red
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => { this.setState({ date: date }) }}
                                />
                            </View>
                        </View>
                    </View>
                    :
                    <View style={{ width: '47%', height: 80, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '100%', height: 50, backgroundColor: Colors.ground.redLight, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        </View>
                    </View>
                :
                <View style={{ width: '47%', height: 80, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '100%', height: 50, backgroundColor: Colors.ground.white, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <DatePicker
                                style={{ width: '100%', }}
                                date={this.state.date}
                                showIcon={false}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate="2018-05-01"
                                maxDate="2022-06-01"
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
                                        width: '85%',
                                        textAlign: 'left', fontWeight: 'bold', fontSize: 20, color: Colors.text.red
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
