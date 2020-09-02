import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import Normalize from '../../system/Normalize'
import Colors from '../../system/Colors'
import { thisExpression } from '@babel/types'

export default class FlightCard extends Component {
    render() {
        return (
            this.props.indirect ?
                <View style={{ width: Normalize.width(280), height: 150, marginTop: 10, elevation: 5, borderRadius: 3, backgroundColor: Colors.ground.white }}>
                    <TouchableOpacity onPress={this.props.onPress} style={{ flex: 1 }}>
                        <View style={{ width: Normalize.width(280), alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                            <View style={{ width: '95%', height: '90%' }}>
                                <View style={{ flex: 6, flexDirection: 'row' }}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ width: '100%', fontSize: Normalize.width(14), color: Colors.text.grayDark, textAlign: 'left' }}>{this.props.solSehir}</Text>
                                        <Text style={{ width: '100%', fontSize: Normalize.width(16), color: Colors.text.orange, textAlign: 'left', fontWeight: 'bold' }}>{this.props.solSaat}</Text>
                                    </View>
                                    <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ width: 8, height: '100%', position: 'absolute', left: 0, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                                <View style={{ width: 8, height: 8, backgroundColor: Colors.text.gray, borderRadius: 50 }}></View>
                                            </View>
                                            <View style={{ width: 8, height: '100%', position: 'absolute', right: 0, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                                <View style={{ width: 8, height: 8, backgroundColor: Colors.text.gray, borderRadius: 50 }}></View>
                                            </View>
                                            <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ width: '100%', borderTopWidth: 1, borderColor: Colors.text.gray, borderStyle: 'dashed' }} />
                                            </View>
                                            <View style={{ width: 17, height: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                                <Image source={require('../../icons/black-plane.png')} style={{ resizeMode: 'contain', width: 17, height: 17 }} />
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ width: '100%', fontSize: Normalize.width(14), color: Colors.text.grayDark, textAlign: 'center' }}>{this.props.ortaSehir}</Text>
                                            <Text style={{ width: '100%', fontSize: Normalize.width(16), color: Colors.text.orange, textAlign: 'center', fontWeight: 'bold' }}>{this.props.ortaSaat}</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ width: 8, height: '100%', position: 'absolute', left: 0, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                                <View style={{ width: 8, height: 8, backgroundColor: Colors.text.gray, borderRadius: 50 }}></View>
                                            </View>
                                            <View style={{ width: 8, height: '100%', position: 'absolute', right: 0, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                                <View style={{ width: 8, height: 8, backgroundColor: Colors.text.gray, borderRadius: 50 }}></View>
                                            </View>
                                            <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ width: '100%', borderTopWidth: 1, borderColor: Colors.text.gray, borderStyle: 'dashed' }} />
                                            </View>
                                            <View style={{ width: 17, height: '100%', position: 'absolute', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                                <Image source={require('../../icons/black-plane.png')} style={{ resizeMode: 'contain', width: 17, height: 17 }} />
                                            </View>
                                        </View>
                                        <View style={{ width: '100%', height: '100%', position: 'absolute', bottom: 10, alignItems: 'center', justifyContent: 'flex-end', zIndex: 1 }}>
                                            <Text style={{ width: '100%', fontSize: Normalize.width(11), color: Colors.text.gray, textAlign: 'center' }}>Aktarmalı</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ width: '100%', fontSize: Normalize.width(14), color: Colors.text.grayDark, textAlign: 'right' }}>{this.props.sagSehir}</Text>
                                        <Text style={{ width: '100%', fontSize: Normalize.width(16), color: Colors.text.orange, textAlign: 'right', fontWeight: 'bold' }}>{this.props.sagSaat}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 3, borderColor: Colors.text.graySoft, borderTopWidth: 0.8, flexDirection: 'row' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <View style={{ width: 30, height: 30, borderRadius: 50, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../../icons/turkish-airlines.png')} style={{ resizeMode: 'contain', width: 30, height: 30 }} />
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: Normalize.width(11), color: Colors.text.gray, textAlign: 'left' }}> {this.props.ucakFirmasi}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../../icons/question.png')} style={{ resizeMode: 'contain', width: 12, height: 12 }} />
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: Normalize.width(11), color: Colors.text.gray, textAlign: 'left' }}> bagaj hakkı {this.props.baggageAllowances}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: Normalize.width(16), color: Colors.text.black, textAlign: 'left', fontWeight: 'bold' }}>{this.props.fiyat}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                :
                <View style={{ width: Normalize.width(280), height: 150, marginTop: 10, elevation: 5, borderRadius: 3, backgroundColor: Colors.ground.white }}>
                    <TouchableOpacity onPress={this.props.onPress} style={{ flex: 1 }}>
                        <View style={{ width: Normalize.width(280), alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                            <View style={{ width: '95%', height: '90%' }}>
                                <View style={{ flex: 6, flexDirection: 'row' }}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ width: '100%', fontSize: Normalize.width(14), color: Colors.text.grayDark, textAlign: 'left' }}>{this.props.solSehir}</Text><Text style={{ width: '100%', fontSize: Normalize.width(16), color: Colors.text.orange, textAlign: 'left', fontWeight: 'bold' }}>{this.props.solSaat}</Text>
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ width: 8, height: '100%', position: 'absolute', left: 0, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                            <View style={{ width: 8, height: 8, backgroundColor: Colors.text.gray, borderRadius: 50 }}></View>
                                        </View>
                                        <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ width: '100%', borderTopWidth: 1, borderColor: Colors.text.gray, borderStyle: 'dashed' }} />
                                        </View>
                                        <View style={{ width: 17, height: '100%', position: 'absolute', right: 0, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                            <Image source={require('../../icons/black-plane.png')} style={{ resizeMode: 'contain', width: 17, height: 17 }} />
                                        </View>
                                        <View style={{ width: '100%', height: '100%', position: 'absolute', bottom: 10, alignItems: 'center', justifyContent: 'flex-end', zIndex: 1 }}>
                                            <Text style={{ width: '100%', fontSize: Normalize.width(11), color: Colors.text.gray, textAlign: 'center' }}>Aktarmasız</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ width: '100%', fontSize: Normalize.width(14), color: Colors.text.grayDark, textAlign: 'right' }}>{this.props.sagSehir}</Text>
                                        <Text style={{ width: '100%', fontSize: Normalize.width(16), color: Colors.text.orange, textAlign: 'right', fontWeight: 'bold' }}>{this.props.sagSaat}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 3, borderColor: Colors.text.graySoft, borderTopWidth: 0.8, flexDirection: 'row' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <View style={{ width: 30, height: 30, borderRadius: 50, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../../icons/turkish-airlines.png')} style={{ resizeMode: 'contain', width: 30, height: 30 }} />
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: Normalize.width(11), color: Colors.text.gray, textAlign: 'left' }}> {this.props.ucakFirmasi}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../../icons/question.png')} style={{ resizeMode: 'contain', width: 12, height: 12 }} />
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: Normalize.width(11), color: Colors.text.gray, textAlign: 'left' }}> {this.props.ucusSuresi}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: Normalize.width(16), color: Colors.text.black, textAlign: 'left', fontWeight: 'bold' }}>{this.props.fiyat}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
        )
    }
}
