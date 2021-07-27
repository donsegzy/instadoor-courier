import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

//  components
import AppText from "../components/AppText"

// constants
import Colors from '../constants/colors'
import FontSizes from '../constants/fontSizes';

const ListTextField = ({label, text, fontTextWeight}) => {

    return (
        <View style={styles.infoContainer}>
            <View style={styles.infoTextContainer}>
                <AppText weight={"400"} style={styles.infoText}>
                    $500.00
                </AppText>
                <AppText>
                    4 July 2021
                </AppText>
            </View>
            <AppText weight="500" style={styles.infoLabel}>
                Cummulative Earnings
            </AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        borderBottomWidth: .8,
        borderBottomColor: Colors.borderColorGreyLight,
        marginVertical: 10
    },
    infoTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    infoText: {
        fontSize: 16,
        lineHeight: 24,
        color: Colors.blackColorPearl
    },
    infoLabel: {
        marginTop: 1,
        fontSize: FontSizes.xs,
        textTransform: 'uppercase',
        color: Colors.greyColorMedium,
        marginBottom: 8
    },
});

export default ListTextField;