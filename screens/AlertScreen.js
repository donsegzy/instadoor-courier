import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';

//components
import AppText from "../components/AppText";

// assets
import GreenAlert from "../assets/Icon/GreenAlert.svg";

// constants
import Colors from "../constants/colors";
import FontSizes from "../constants/fontSizes";

const AlertScreen = ({navigation, route}) => {

    const goToPrevPage = () => {
        navigation.goBack()
    }

    return (
        <>
           <View style={styles.alertSection}>
                <View style={styles.alertSvg}>
                    <GreenAlert />
                    <AppText weight='700' style={styles.alertTitle}> 
                        {route.params.label}
                    </AppText>
                    <AppText style={styles.alertDescription}>
                        {route.params.description}
                    </AppText>
                </View>
                <TouchableOpacity onPress={goToPrevPage} style={styles.button}>
                    <AppText weight="700" style={styles.buttonText}>
                        Done
                    </AppText>
                </TouchableOpacity>
           </View>

       </>
    );
};

//  TODO: add color constants

const styles = StyleSheet.create({
    alertSection: {
        flex: 1,
        backgroundColor: Colors.whiteColor,
    },
    alertSvg: {
        flex: .95,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    alertTitle: {
        fontSize: FontSizes.xxl,
        color: Colors.greenColorDark
    },
    alertDescription: {
        fontSize: FontSizes.lg,
        color: Colors.blackColorPearl,
        textAlign: 'center',
        marginTop: 10
    },
    
    // button
    button: {
        flex: .08,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 16,
        backgroundColor: Colors.pinkMedium,

    },
    buttonText: {
        fontSize: 14,
        color: Colors.whiteColor
    } 
});

export default AlertScreen;
