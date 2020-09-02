import React, { Component, Fragment } from 'react';
import { ScrollView, SafeAreaView, View, Platform, Dimensions, KeyboardAvoidingView, AsyncStorage, StatusBar } from 'react-native';
import Colors from '../system/Colors';

console.disableYellowBox = true;
export default class Container extends Component {

    render() {
        return (
            <Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: Colors.ground.red }} />
                <SafeAreaView style={{ flex: 0, backgroundColor: Colors.ground.white }}>
                    <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false} keyboardShouldPersistTaps={"never"} contentContainerStyle={{ backgroundColor: Colors.ground.white, flexGrow: 1, justifyContent: 'center', ...Platform.select({ android: { height: Dimensions.get('window').height - 24 } }), ...Platform.select({ ios: { height: Dimensions.get('window').height - 21 } }) }}>
                        <View style={{ flex: 1, backgroundColor: Colors.ground.white }}>
                            {this.props.children}
                        </View>
                    </ScrollView>
                    <StatusBar backgroundColor={Colors.text.red} hidden={false} barStyle="light-content" />
                </SafeAreaView>
            </Fragment>
        )
    }
}
