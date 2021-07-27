import React from 'react'
import {Text} from "react-native";

// constants
import Colors from '../constants/colors'

const AppText = (props) => {

    const fontWeightValue = () => {

        if (props.weight === "100") {
            return "Inter-Thin"
        }
        if (props.weight === "200") {
            return "Inter-ExtraLight"
        }
        if (props.weight === "300") {
            return "Inter-Light"
        }
        if (props.weight === "400") {
            return "Inter-Regular"
        }
        if (props.weight === "500") {
            return "Inter-Medium"
        }
        if (props.weight === "600") {
            return "Inter-SemiBold"
        }
        if (props.weight === "700") {
            return "Inter-Bold"
        }
        if (props.weight === "800") {
            return "Inter-ExtraBold"
        }
        if (props.weight === "900") {
            return "Inter-Black"
        }
        return "Inter-Regular"
    }

    return (
        <Text allowFontScaling={false} style={{ fontFamily: fontWeightValue(), color: Colors.blackColorPearl, ...props.style }}>
          {props.children}
        </Text>
    )
}

export default AppText
