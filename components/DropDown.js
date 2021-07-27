import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Pressable
} from 'react-native';

//  components
import AppText from "./AppText";
import ListTextField from "./ListTextField"

// assets
import CheveronUpSvg from "../assets/Icon/chevron-up.svg";
import CheveronDownSvg from "../assets/Icon/chevron-down.svg";

// constants
import Colors from '../constants/colors'
import FontSizes from "../constants/fontSizes";

const DropDown = () => {
    // NOTE: make this more reusable
    
    const [toggleDropdown, setToggleDropdown] = useState(false)

    return (
        <View style={styles.dropdownContainer}>
            <Pressable onPress={() => setToggleDropdown(!toggleDropdown)} style={styles.dropdownLabel}>
                <AppText weight="700" style={styles.dropdownLabelText}> Earning Breakdown </AppText>
                {
                    !toggleDropdown && <CheveronDownSvg style={{color: Colors.blueColorLight}} />
                }
                {
                    toggleDropdown && <CheveronUpSvg style={{color: Colors.blueColorLight}} />
                }
                
            </Pressable>
            <View style={toggleDropdown ? {paddingLeft: 4} : {display: 'none'}}>
                <ListTextField fontTextWeight='700' label={'Delivery Payment'} text={'N 0.00'} />
                <ListTextField fontTextWeight='700' label={'Truck Rentals'} text={'N 0.00'} />
                <ListTextField fontTextWeight='700' label={'Commission'} text={'N 0.00'} />
                <ListTextField fontTextWeight='700' label={'Service Charges'} text={'N 0.00'} />
                <ListTextField fontTextWeight='700' label={'Actual Earnings'} text={'N 0.00'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // dropdown
    dropdownContainer: {
        padding: 16,
        backgroundColor: Colors.whiteColor,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.borderColorGrey
    },
    dropdownLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dropdownLabelText: {
        fontSize: FontSizes.xl,
        color: Colors.blueColorLight,
    }
});

export default DropDown;