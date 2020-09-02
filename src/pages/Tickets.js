import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Colors from '../system/Colors'
import Container from '../components/Container'
import Title from '../components/user/Title'
import InputText from '../components/user/InputText'
import Button from '../components/user/Button'
import TicketDetailDate from '../components/user/TicketDetailDate'

export default class Tickets extends Component {
    render() {
        return (
            <Container>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

                    <Text style={{ fontSize: 25, color: Colors.text.black, fontWeight: 'bold', marginVertical: 10 }}>Uçak Bileti</Text>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '100%' }}>
                        <View style={{ width: '95%' }}>
                            <Title text={"Nereden"} />
                            <InputText icon={require('../icons/location.png')} placeholder={"Şehir veya Havalimanı"} maxLength={60} />
                        </View>

                        <View style={{ width: '95%', marginTop: 15 }}>
                            <Title text={"Nereye"} />
                            <InputText icon={require('../icons/target.png')} placeholder={"Şehir veya Havalimanı"} maxLength={60} />
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
                            <Title text={"İsim Soyisim"} />
                            <InputText icon={require('../icons/user.png')} placeholder={"İsim Soyisim"} maxLength={60} />
                        </View>

                        <View style={{ width: '95%', marginTop: 15 }}>
                            <Title text={"Telefon Numarası"} />
                            <InputText keyboardType={'numeric'} icon={require('../icons/phone.png')} placeholder={"05 +"} maxLength={11} />
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
