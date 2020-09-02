import { TouchableOpacity, View, Platform, Dimensions, PixelRatio, Text, Image, Linking } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');
var ratio=SCREEN_HEIGHT/SCREEN_WIDTH;

console.log('SCREEN_WIDTH ' + SCREEN_WIDTH)
console.log('SCREEN_HEIGHT ' + SCREEN_HEIGHT)

if(ratio>=2){
    var scaleW = SCREEN_WIDTH / 320;
    var scaleH = SCREEN_HEIGHT / 770;
 
}

else if (ratio>=1.5&&ratio<2){
    var scaleW = SCREEN_WIDTH / 320;
    var scaleH = SCREEN_HEIGHT / 670;
}

else if (ratio>=1&&ratio<1.5){
    var scaleW = SCREEN_WIDTH / 350;
    var scaleH = SCREEN_HEIGHT / 600;
}

else if (ratio<1){
    var scaleW = SCREEN_WIDTH / 320;
    var scaleH = SCREEN_HEIGHT / 470;
}

var Normalize = {
    height: function (size) {
        const newSize = size * scaleH
        if (Platform.OS === 'ios') {
            return Math.round(PixelRatio.roundToNearestPixel(newSize))
        } else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
        }
    },
    width: function (size) {
        const newSize = size * scaleW
        if (Platform.OS === 'ios') {
            return Math.round(PixelRatio.roundToNearestPixel(newSize))
        } else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
        }
    },
    widthSize: function () {
        return SCREEN_WIDTH
    },
    heightSize: function () {
        return SCREEN_HEIGHT
    }
};
export {Normalize as default};
