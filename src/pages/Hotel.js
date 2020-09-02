import React, { Component } from 'react'
import { Text, View, Picker } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Colors from '../system/Colors'
import Container from '../components/Container'
import Title from '../components/user/Title'
import InputText from '../components/user/InputText'
import Button from '../components/user/Button'
import TicketDetailDate from '../components/user/TicketDetailDate'

export default class Hotel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "",
        }
    }

    render() {
        return (
            <Container>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

                    <Text style={{ fontSize: 25, color: Colors.text.black, fontWeight: 'bold', marginVertical: 10 }}>Otel</Text>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '100%' }}>
                        <View style={{ width: '95%' }}>
                            <Title text={"Şehir"} />
                            <View style={{ width: '100%', height: 55, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderWidth: 1, borderColor: Colors.ground.gray, borderRadius: 5 }}>
                                <Picker
                                    selectedValue={this.state.city}
                                    style={{ height: "90%", width: "100%" }}
                                    itemStyle={{ fontSize: 20 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ city: itemValue })
                                    }>
                                    <Picker.Item label="Konaklamak istediğiniz ili seçin" value="Adana" />
                                    <Picker.Item label="Ankara" value="Ankara" />
                                </Picker>
                            </View>
                        </View>

                        <View style={{ width: '95%' }}>
                            <Title text={"Otel"} />
                            <View style={{ width: '100%', height: 55, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderWidth: 1, borderColor: Colors.ground.gray, borderRadius: 5 }}>
                                <Picker
                                    selectedValue={this.state.city}
                                    style={{ height: "90%", width: "100%" }}
                                    itemStyle={{ fontSize: 20 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ city: itemValue })
                                    }>
                                    <Picker.Item label="Otel seçin" value="Adana" />
                                    <Picker.Item label="Ankara" value="Ankara" />
                                </Picker>
                            </View>
                        </View>
                        
                        <View style={{ width: '95%', marginTop: 15 }}>
                            <Title text={"Gidiş Tarihi"} />
                            <TicketDetailDate icon={require('../icons/calendar.png')} />
                        </View>

                        <View style={{ width: '95%', marginTop: 15 }}>
                            <Title text={"Dönüş Tarihi"} />
                            <TicketDetailDate icon={require('../icons/calendar.png')} />
                        </View>

                        <View style={{ width: '95%', marginTop: 15 }}>
                            <Title text={"Kişi Sayısı"} />
                            <InputText keyboardType={'numeric'} icon={require('../icons/user.png')} placeholder={"1"} maxLength={11} />
                        </View>
                        
                        <View style={{ width: '95%', marginTop: 15 }}>
                            <Title text={"Oda Sayısı"} />
                            <InputText keyboardType={'numeric'} icon={require('../icons/phone.png')} placeholder={"1"} maxLength={11} />
                        </View>

                        <View style={{ marginTop: 40 }}>
                            <Button text={"Talep Gönder"} />
                        </View>

                        <View style={{ height: 70 }} />
                    </ScrollView>
                </View>
            </Container>
        )
    }
}
