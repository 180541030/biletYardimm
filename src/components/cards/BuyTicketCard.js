import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import Normalize from '../../system/Normalize'
import Colors from '../../system/Colors'

export default class FlightCard extends Component {
    render() {
        return (
            <View style={{ width: '95%', maxHeight: 180, flexDirection: 'row', marginBottom: 10, }}>

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image source={this.props.isWait ? require('../../icons/time.png') : require('../../icons/turkish-airlines.png')} style={{ resizeMode: 'cover', width: 20, height: 20, }} />
                    {this.props.isWait ? <View /> : <View style={{ width: 10, height: 10, marginTop: 5, backgroundColor: Colors.ground.graySoft, borderRadius: 15 }} />}
                    {this.props.isWait ? <View /> : <View style={{ width: 0, height: '40%', borderWidth: 1, borderStyle: 'dashed', borderColor: Colors.ground.graySoft }} />}
                    {this.props.isWait ? <View /> : <Image source={require('../../icons/black-plane.png')} style={{ resizeMode: 'center', width: 20, height: 20, marginTop: 5, transform: [{ rotate: '90deg' }] }} />}
                </View>
                {
                    this.props.isWait ?
                        <View style={{ flex: 8, borderRadius: 20, padding: 12, borderWidth: 1, borderColor: Colors.ground.graySoft, borderBottomWidth: 0, }}>
                            <View><Text style={{ color: Colors.text.gray }}>Bekleme Süresi</Text></View>
                            <View><Text style={{ color: Colors.text.orangeDark, fontSize: 17, fontWeight: 'bold' }}>{this.props.beklemeSuresi}</Text></View>
                            <View><Text style={{ color: Colors.text.graySoft }}>{this.props.beklenenYer}</Text></View>
                        </View>
                        :
                        <View style={{ flex: 8, borderRadius: 20, padding: 12, borderWidth: 1, borderColor: Colors.ground.graySoft, borderBottomWidth: 0, }}>
                            <View><Text style={{ color: Colors.text.red, fontSize: 17, fontWeight: 'bold' }}>{this.props.kalkisSaati}</Text></View>
                            <View><Text style={{ color: Colors.text.gray }}>{this.props.kalkisTarihi}</Text></View>
                            <View><Text style={{ color: Colors.text.graySoft }}>{this.props.kalkisYeri}</Text></View>

                            <View><Text style={{ color: Colors.text.green, fontSize: 17, fontWeight: 'bold', marginTop: 10, }}>{this.props.varisSaati}</Text></View>
                            <View><Text style={{ color: Colors.text.gray }}>{this.props.varisTarihi}</Text></View>
                            <View><Text style={{ color: Colors.text.graySoft }}>{this.props.varisYeri}</Text></View>

                            <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                                <View style={{ flexDirection: 'row' }}><Image source={require('../../icons/luggage.png')} style={{ resizeMode: 'center', width: 15, height: 15, marginRight: 5 }} /><Text style={{ color: Colors.text.graySoft }}>{this.props.agirlik}</Text></View>
                                <View style={{ flexDirection: 'row' }}><Image source={require('../../icons/time.png')} style={{ resizeMode: 'center', width: 15, height: 15, marginRight: 5 }} /><Text style={{ color: Colors.text.graySoft }}>{this.props.ucusSuresi}</Text></View>
                                <View style={{ flexDirection: 'row' }}><Image source={require('../../icons/turkish-airlines.png')} style={{ resizeMode: 'center', width: 15, height: 15, marginRight: 5 }} /><Text style={{ color: Colors.text.graySoft }}>{this.props.ucusKodu}</Text></View>
                            </View>
                        </View >
                }
            </View>
        )
    }
}
