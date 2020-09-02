import React, { Component } from 'react'
import { Text, View, Image, FlatList } from 'react-native'

import Colors from '../../system/Colors'
import MyTicketPassengerCard from './MyTicketPassengerCard'
import moment from 'moment';

export default class MyTicketCard extends Component {
    ConvertMinutes(num) {
        let d = Math.floor(num / 1440); // 60*24
        let h = Math.floor((num - (d * 1440)) / 60);
        let m = Math.round(num % 60);

        if (d > 0) {
            return (d + "g, " + h + "s, " + m + "dk");
        } else {
            return (h + "s, " + m + "dk");
        }
    }
    getDiff() {
        const today = new Date();
        const create = this.props.created_at;
        const ticket_day = this.props.flightDate;

        var today_moment = moment(create);
        var create_moment = moment(today);
        var ticket_day_moment = moment(ticket_day);

        let alıs_bilet_fark = ticket_day_moment.diff(create_moment, 'minutes');
        return this.ConvertMinutes(alıs_bilet_fark);
    }
    getRate() {
        // alert(this.props.flightDate)
        const today = new Date();
        const create = this.props.created_at;
        const ticket_day = this.props.flightDate;

        var today_moment = moment(create);
        var create_moment = moment(today);
        var ticket_day_moment = moment(ticket_day);

        let bilet_alıs_fark = ticket_day_moment.diff(create_moment, 'minutes');
        let bugun_bilet_fark = ticket_day_moment.diff(today_moment, 'minutes');
        let yuzde = 100 - ((bilet_alıs_fark * 100) / bugun_bilet_fark)
        // alert(yuzde )
        return yuzde;
    }
    sumTime(a, b) {
        let a_h = parseInt(a.substr(0, 2), 10);
        let b_h = parseInt(b.substr(0, 2), 10);

        let a_m = parseInt(a.substr(3, 5), 10);
        let b_m = parseInt(b.substr(3, 5), 10);

        let new_m = a_m + b_m;
        let m_of_h = new_m / 60;
        let m_of_m = new_m % 60;
        let new_hours = a_h + b_h;

        if (m_of_h > 0) new_hours += m_of_h;
        if (m_of_m > 0) new_m = m_of_m;
        new_hours = new_hours % 24;

        let new_saat = new_hours.toFixed(0).toString();
        let new_dakika = new_m.toFixed(0).toString(); 
        let saat = new_saat.length > 1 ? new_saat : "0" + new_saat;
        let dakika = new_dakika.length > 1 ? new_dakika : "0" + new_dakika
        return saat + ":" + dakika
    }
    render() {
        return (
            <View style={{ flex: 1, width: "100%", alignItems: 'center' }}>
                <View style={{ width: "90%", borderTopLeftRadius: 8, borderTopRightRadius: 8, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 5, }, shadowOpacity: 0.34, shadowRadius: 6.27, elevation: 10, }}>

                    <View style={{ width: '100%', height: 165, backgroundColor: Colors.ground.red, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '85%', height: '70%', alignItems: 'center' }}>
                            <View style={{ width: "25%", height: '100%', position: "absolute", left: 0 }}>
                                <Text style={{ fontSize: 33, color: Colors.text.white, fontWeight: 'bold', textAlign: 'left' }}>{this.props.leftAir}</Text>
                                <Text style={{ fontSize: 13, color: Colors.text.whiteDark2, textAlign: 'left' }}>{this.props.leftCity}</Text>
                                <Text style={{ fontSize: 14, color: Colors.text.whiteDark, textAlign: 'left', marginTop: 10 }}>{this.props.leftDate}</Text>
                                <Text style={{ fontSize: 14, color: Colors.text.whiteDark, textAlign: 'left' }}>{this.props.flight_real_time.substr(0, 5)}</Text>
                            </View>
                            <View style={{ width: "25%", height: '100%', position: "absolute", right: 0 }}>
                                <Text style={{ fontSize: 33, color: Colors.text.white, fontWeight: 'bold', textAlign: 'right' }}>{this.props.rightAir}</Text>
                                <Text style={{ fontSize: 13, color: Colors.text.whiteDark2, textAlign: 'right' }}>{this.props.rightCity}</Text>
                                <Text style={{ fontSize: 14, color: Colors.text.whiteDark, textAlign: 'right', marginTop: 10 }}>{this.props.rightDate}</Text>
                                <Text style={{ fontSize: 14, color: Colors.text.whiteDark, textAlign: 'right' }}>{this.sumTime(this.props.flight_real_time, this.props.flight_time)}</Text>
                            </View>
                            <View style={{ width: "50%", height: 50, position: "absolute", alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ width: 8, height: '100%', position: 'absolute', left: 0, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                    <View style={{ width: 8, height: 8, backgroundColor: Colors.text.white, borderRadius: 50 }}></View>
                                </View>
                                <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ width: '100%', borderTopWidth: 1, borderColor: Colors.text.white, borderStyle: 'dashed' }} />
                                </View>
                                <View style={{ width: 17, height: '100%', position: 'absolute', right: 0, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                    <Image source={require('../../icons/white-plane.png')} style={{ resizeMode: 'contain', width: 17, height: 17 }} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '100%', backgroundColor: Colors.ground.white }}>
                        <View style={{ width: '100%', height: 50, backgroundColor: Colors.ground.blue, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: '85%', height: "100%", alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 16, color: Colors.text.black, fontWeight: 'bold', textAlign: 'left' }}>Uçuş : </Text>
                                    <Text style={{ fontSize: 16, color: Colors.text.red, fontWeight: 'bold', textAlign: 'left' }}>{this.props.flight}</Text>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 16, color: Colors.text.black, fontWeight: 'bold', textAlign: 'right' }}>PNR NO : </Text>
                                    <Text style={{ fontSize: 16, color: Colors.text.red, fontWeight: 'bold', textAlign: 'right' }}>{this.props.pnr}</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{ width: '100%', height: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: '85%', height: 2, borderBottomWidth: 1, borderBottomColor: Colors.ground.whiteDark2 }} />
                        </View>


                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: '85%' }}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    ListHeaderComponent={<View style={{ height: 20 }}></View>}
                                    ListFooterComponent={<View style={{ height: 40 }}></View>}
                                    data={this.props.users}
                                    renderItem={({ item, index }) =>
                                        <MyTicketPassengerCard
                                            name={item.name + " " + item.surname}
                                            bagWeight={item.baggage_allowance}
                                            seatNumber={item.seat_no}
                                        />
                                    }
                                />
                            </View>
                        </View>


                    </View>
                </View>

                <View style={{ width: '80%', height: 40, backgroundColor: Colors.ground.white, alignItems: 'center', justifyContent: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 5, }, shadowOpacity: 0.34, shadowRadius: 6.27, elevation: 10, }}>
                    <View style={{ width: '100%', borderWidth: 1, borderRadius: 8, borderStyle: 'dashed', borderColor: '#D1D2DE', backgroundColor: '#FFFFFF', alignContent: 'flex-start' }} />
                </View>

                <View style={{ width: "90%", backgroundColor: Colors.ground.white, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 5, }, shadowOpacity: 0.34, shadowRadius: 6.27, elevation: 10, }}>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '100%', height: 110, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: '85%', height: 80, backgroundColor: Colors.ground.white, alignItems: 'flex-start', justifyContent: 'center', borderWidth: 0.5, borderColor: Colors.ground.gray, borderRadius: 15, overflow: 'hidden' }}>
                                <View style={{ width: "100%", height: "80%", alignItems: 'center', justifyContent: 'space-evenly' }}>
                                    <View style={{ width: "90%", height: "100%", alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <View style={{ height: "100%", alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
                                            <Text style={{ fontSize: 18, color: Colors.text.black, textAlign: 'left' }}>UÇUŞA</Text>
                                            <Text style={{ fontSize: 20, color: Colors.text.black, textAlign: 'left', fontWeight: "bold" }}>{this.getDiff()}</Text>
                                        </View>
                                        <View style={{ height: "100%", alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
                                            <Image source={require('../../icons/airplane-takeoff.png')} style={{ resizeMode: 'center', width: 25, height: 25 }} />
                                        </View>
                                    </View>
                                </View>

                                <View style={{ width: `${this.getRate()}%`, height: "100%", backgroundColor: Colors.ground.redLight, position: "absolute", zIndex: -1 }} />

                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: 30 }} />
            </View>
        )
    }
}
