import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

//  components
import AppText from "../components/AppText"

// constants
import Colors from '../constants/colors'

const TextArea = ({label, value, placeholderText, onChangeFn}) => {
    const [inputValue, setInputValue] = useState(value);

    const onInputChange = (text) => {
        setInputValue(text)

        // then call setState from outside
    }

    return (
        <View style={styles.infoContainer}>
            <AppText weight={styles.infoLabel.fontWeight} style={styles.infoLabel}>
                {label}
            </AppText>
            <TextInput 
                placeholderTextColor={Colors.greyColorMedium}
                style={styles.infoInput}
                value={inputValue}
                placeholder={placeholderText}
                onChangeText={text => onInputChange(text)}
                multiline={true}
                numberOfLines={7}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        marginVertical: 10
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
        fontWeight: '400',
        textAlignVertical: 'top',
        height: 100
    }
});

export default TextArea;