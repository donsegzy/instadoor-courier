import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

//  components
import AppText from "../components/AppText"

// constants
import Colors from '../constants/colors'
import fontSizes from '../constants/fontSizes';

const InputTextField = ({label, value, placeholderText, keyboardInputType, onChangeFn, altLabelText, altLabelTextFn, addPadding}) => {
    const [inputValue, setInputValue] = useState(value);

    const onInputChange = (text) => {
        setInputValue(text)

        // then call setState from outside
    }

    return (
        <View style={addPadding ? {...styles.infoContainer, paddingHorizontal: 20} : styles.infoContainer}>
            <View style={styles.labelContainer}>
                <AppText weight={styles.infoLabel.fontWeight} style={styles.infoLabel}>
                    {label}
                </AppText>
                {
                    altLabelText && <TouchableOpacity onPress={altLabelTextFn}>
                        <AppText weight={styles.infoLabel.fontWeight} style={styles.infoLabelAltText}>
                            {altLabelText}
                        </AppText>
                    </TouchableOpacity>
                }
                
            </View>
            <TextInput 
                placeholderTextColor={Colors.greyColorMedium}
                style={styles.infoInput}
                value={inputValue}
                placeholder={placeholderText}
                onChangeText={text => onInputChange(text)}
                keyboardType={keyboardInputType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        marginVertical: 10,
    },
    infoText: {
        fontSize: 16,
        color: Colors.blackColorPearl
    },
    infoLabel: {
        marginBottom: 2,
        fontSize: 16,
        fontWeight: "600",
        color: Colors.blackColorPearl
    },
    infoInput: {
        padding: 12,
        backgroundColor: Colors.inputBgColor,
        borderWidth: .5,
        borderColor: Colors.inputBorderColor,
        borderRadius: 4,
        fontSize: 16,
        color: Colors.blackColorPearl,
        fontWeight: '400'
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    infoLabelAltText: {
        fontSize: fontSizes.md,
        color: Colors.pinkMedium,
        lineHeight: fontSizes.xxl
    }
});

export default InputTextField;