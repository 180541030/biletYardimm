import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import Normalize from '../../system/Normalize'
import Colors from '../../system/Colors'

export default class PassengersCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adult: 0,
            child: 0,
            baby: 0,
        }
    }

    render() {
        return (
            <View style={{ width: '100%', height: 90, backgroundColor: Colors.ground.white, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '93%', height: 70, backgroundColor: '', flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: '', flexDirection: 'row' }}>
                        <View>
                            <Text style={{ fontSize: 15, color: Colors.text.gray, textAlign: 'left' }}>Yolcular</Text>
                            <Text style={{ fontSize: 17, color: Colors.text.red, fontWeight: 'bold', textAlign: 'left' }}>Yetişkin  </Text>
                            <Text style={{ fontSize: 12, color: Colors.text.graySoft, fontWeight: 'bold', textAlign: 'left' }}>>12 yaş</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.setState({ adult: this.state.adult + 1 })}><Image source={require('../../icons/up.png')} style={{ resizeMode: 'contain', width: 17, height: 17 }} /></TouchableOpacity>
                            <Text style={{ fontSize: 17, color: Colors.text.black, fontWeight: 'bold', textAlign: 'left' }}>{this.state.adult}</Text>
                            <TouchableOpacity onPress={() => this.setState({ adult: this.state.adult == 0 ? 0 : this.state.adult - 1 })}><Image source={require('../../icons/down.png')} style={{ resizeMode: 'contain', width: 17, height: 17 }} /></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '', flexDirection: 'row', justifyContent: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 17, color: Colors.text.red, fontWeight: 'bold', textAlign: 'center' }}></Text>
                            <Text style={{ fontSize: 17, color: Colors.text.red, fontWeight: 'bold', textAlign: 'center' }}>Çocuk  </Text>
                            <Text style={{ fontSize: 12, color: Colors.text.graySoft, fontWeight: 'bold', textAlign: 'left' }}>2-12 yaş</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.setState({ child: this.state.child + 1 })}><Image source={require('../../icons/up.png')} style={{ resizeMode: 'contain', width: 17, height: 17 }} /></TouchableOpacity>
                            <Text style={{ fontSize: 17, color: Colors.text.black, fontWeight: 'bold', textAlign: 'center' }}>{this.state.child}</Text>
                            <TouchableOpacity onPress={() => this.setState({ child: this.state.child == 0 ? 0 : this.state.child - 1 })}><Image source={require('../../icons/down.png')} style={{ resizeMode: 'contain', width: 17, height: 17 }} /></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '', flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <View>
                            <Text style={{ fontSize: 17, color: Colors.text.red, fontWeight: 'bold', textAlign: 'right' }}></Text>
                            <Text style={{ fontSize: 17, color: Colors.text.red, fontWeight: 'bold', textAlign: 'right' }}>Bebek  </Text>
                            <Text style={{ fontSize: 12, color: Colors.text.graySoft, fontWeight: 'bold', textAlign: 'left' }}>{'<2 yaş'}</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.setState({ baby: this.state.baby + 1 })}><Image source={require('../../icons/up.png')} style={{ resizeMode: 'contain', width: 17, height: 17 }} /></TouchableOpacity>
                            <Text style={{ fontSize: 17, color: Colors.text.black, fontWeight: 'bold', textAlign: 'right' }}>{this.state.baby}</Text>
                            <TouchableOpacity onPress={() => this.setState({ baby: this.state.baby == 0 ? 0 : this.state.baby - 1 })}><Image source={require('../../icons/down.png')} style={{ resizeMode: 'contain', width: 17, height: 17 }} /></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
