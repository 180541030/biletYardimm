import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Colors from './Colors'
import Normalize from './Normalize'

export default class Modal extends Component {
    render() {
        return (
            <View style={{ position: 'absolute', width: this.props.visible == true ? '100%' : 0, height: this.props.visible == true ? '100%' : 0, alignItems: 'center', justifyContent: 'center', zIndex: 4 }}>
                <TouchableOpacity onPress={this.props.onPressSpace} activeOpacity={1} style={{ width: this.props.visible == true ? '100%' : 0, height: this.props.visible == true ? '100%' : 0, backgroundColor: 'rgba(5,5,10,0.2)', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '75%', backgroundColor: 'white', borderRadius: 10, overflow: 'hidden' }}>
                        <View style={{ width: '100%', marginVertical: this.props.title ? '3%' : 0, backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: Colors.text("dark"), fontSize: Normalize.width(18), textAlign: 'center', fontWeight: 'bold' }}>{this.props.title}</Text>
                        </View>
                        <View style={{ width: '100%', backgroundColor: '', marginBottom: this.props.content ? '12%' : 0, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: Colors.text("grayDark"), fontSize: Normalize.width(16), textAlign: 'center' }}>{this.props.content}</Text>
                        </View>
                        <View style={{ width: '100%', backgroundColor: '', marginVertical: '5%', alignItems:'center', justifyContent:'center'}}>
                            {this.props.leftButton ?
                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center' }}>
                                    <TouchableOpacity onPress={this.props.onPressLeft} style={{ width: Normalize.width(80), height: Normalize.height(40), flexDirection: 'row', backgroundColor:this.props.leftButton=='İptal'?'':Colors.ground("blue"), borderRadius: Normalize.height(7), alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: Colors.text("white"), fontSize: Normalize.width(16) }}>{this.props.leftButton}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.props.onPressRight} style={{ width: Normalize.width(80), height: Normalize.height(40), flexDirection: 'row', backgroundColor: Colors.ground("blue"), borderRadius: Normalize.height(7), alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: Colors.text("white"), fontSize: Normalize.width(16), textAlign: 'center' }}>{this.props.rightButton ? this.props.rightButton : 'Tamam'}</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <TouchableOpacity onPress={this.props.onPressRight} style={{ width: Normalize.width(80), height: Normalize.height(40), flexDirection: 'row', backgroundColor: Colors.ground("blue"), borderRadius: Normalize.height(7), alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: Colors.text("lightBlue"), fontSize: Normalize.width(16), textAlign: 'center' }}>{this.props.rightButton ? this.props.rightButton : 'Tamam'}</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
