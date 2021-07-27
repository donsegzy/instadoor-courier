import React, {useState, useRef} from 'react';
import {
      View,
      StyleSheet
} from 'react-native';
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

// assets
import DotSvg from "../assets/Icon/dot.svg"

 // constants
 import Colors from "../constants/colors"
 import FontSizes from "../constants/fontSizes";

const PinInput = ({onChangeFn}) => {
    const inputRef = useRef('')
    const [codeValue, setCodeValue] = useState('');

    return (
            <View style={styles.pinContainer}>
                <SmoothPinCodeInput
                    placeholder={<DotSvg style={{color: Colors.pinkMedium }} />}
                    ref={inputRef}
                    cellStyle={{
                        borderWidth: .5,
                        borderColor: Colors.greyColorMedium,
                        borderRadius: 4,
                        padding: 12,
                        backgroundColor: '#F7F8FD',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    cellStyleFocused={{
                        borderWidth: 1,
                        borderColor: Colors.pinkMedium
                    }}
                    textStyle={{
                        fontSize: FontSizes.lg,
                        color: Colors.blackColorPearl
                    }}
                    cellSpacing={10}
                    cellSize={60}
                    value={codeValue}
                    onTextChange={code => setCodeValue(code)}
                    // onFulfill={this._checkCode}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    pinContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        marginVertical: 20
    } 
})

export default PinInput
  