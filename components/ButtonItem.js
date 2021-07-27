import React from 'react'
import {TouchableOpacity, StyleSheet, View} from "react-native"

//  components
import AppText from "../components/AppText";

// constants
import Colors from "../constants/colors"

const ButtonItem = ({text, btnType, onPressFn, halfWidth}) => {
    const btnBgColorFn = () => {
        if (btnType === 'grey') {
            return greyButtonStyles.button
        }
        if (btnType === 'white') {
            return whiteButtonStyles.button
        }
        return pinkButtonStyles.button
    }

    const btnTextColorFn = () => {
        if (btnType === 'grey') {
            return greyButtonStyles.buttonText
        }
        if (btnType === 'white') {
            return whiteButtonStyles.buttonText
        }
        return pinkButtonStyles.buttonText
    }
    return (
        <View style={halfWidth ? { width: '48%', flexDirection: 'row' } : {width: '100%', flexDirection: 'row'}}>
            <TouchableOpacity onPress={onPressFn} style={btnBgColorFn()}>
                <AppText weight="800" style={btnTextColorFn()}>
                    {text}
                </AppText>
            </TouchableOpacity>
        </View>
    )
}

const buttonStyles = StyleSheet.create({
    button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 4,
},
buttonText: {
    fontSize: 14,
}
})

const pinkButtonStyles = StyleSheet.create({
        button: {
        ...buttonStyles.button,
        backgroundColor: Colors.pinkMedium,
    },
    buttonText: {
        ...buttonStyles.buttonText,
        color: Colors.whiteColor
    }
})

const greyButtonStyles = StyleSheet.create({
    button: {
    ...buttonStyles.button, 
    backgroundColor: Colors.borderColorGrey,
},
buttonText: {
    ...buttonStyles.buttonText,
    color: Colors.blueColorLight
}
})

const whiteButtonStyles = StyleSheet.create({
    button: {
    ...buttonStyles.button, 
    backgroundColor: Colors.pinkLight,
    borderWidth: 1,
    borderColor: Colors.borderColorPink,
},
buttonText: {
    ...buttonStyles.buttonText,
    color: Colors.pinkMedium
}
})

export default ButtonItem;
