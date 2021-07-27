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

const ProfileTextField = ({label, text, fontTextWeight}) => {

    return (
        <View style={styles.infoContainer}>
            <AppText weight="500" style={styles.infoLabel}>
                {label}
            </AppText>
            <View style={styles.infoTextContainer}>
                <AppText weight={"400"} style={styles.infoText}>
                    {text}
                </AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        borderBottomWidth: .8,
        borderBottomColor: Colors.borderColorGreyLight,
        paddingBottom: 10,
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

export default ProfileTextField;