import React, {useState} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {Picker} from "@react-native-picker/picker";
import RNPickerSelect from 'react-native-picker-select';

//  components
import AppText from "../components/AppText"

// assets
// import CheveronDownSvg from "../assets/Icon/chevron-down.svg";

// constants
import Colors from '../constants/colors'

const SelectTextField = ({label, selectItems, onChangeFn }) => {
    const [selectedOption, setSelectedOption] = useState('football');

    // TODO: Confirm IOS bug has been resolved
    return (
        <View style={styles.infoContainer}>
            <AppText weight={styles.infoLabel.fontWeight} style={styles.infoLabel}>
                {label}
            </AppText>
            <View>
                <RNPickerSelect
                    placeholder={{}}
                    items={
                    selectItems.map(item => {
                        return {label: item, value: item}
                        })
                    }
                    onValueChange={value => {
                    setSelectedOption(value)
                    }}
                    style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                        top: 10,
                        right: 12,
                    },
                    }}
                    // value={selectedOption}
                    useNativeAndroidPickerStyle={false}
                    textInputProps={{ underlineColor: 'yellow' }}
                    Icon={() => {
                    return <CheveronDownSvg style={{color: Colors.greyColorMedium}} />
                    }}
                />
            </View>
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
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        backgroundColor: Colors.inputBgColor,
        borderWidth: .5,
        borderColor: Colors.inputBorderColor,
        borderRadius: 4,
        fontSize: 16,
        color: Colors.blackColorPearl,
        fontWeight: '400',
        padding: 12,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        backgroundColor: Colors.inputBgColor,
        borderWidth: .5,
        borderColor: Colors.inputBorderColor,
        borderRadius: 4,
        fontSize: 16,
        color: Colors.blackColorPearl,
        fontWeight: '400',
        padding: 12,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

export default SelectTextField;