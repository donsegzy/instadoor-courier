import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

//components
import AppText from "../components/AppText";
import ButtonItem from "./ButtonItem";

// assets
import PinMapSvg from "../assets/Icon/pin map location 1.svg";
import LocationSvg from '../assets/Icon/location-marker-1.svg'
import VerifiedSvg from "../assets/Icon/verified.svg";
import StarFilledSvg from "../assets/Icon/star filled.svg";
import StarHalfFilledSvg from "../assets/Icon/star half filled.svg";
import PhoneSvg from "../assets/Icon/Call.svg";

// constants
import Colors from "../constants/colors";
import FontSizes from "../constants/fontSizes";

const CustomerInfo = ({goToCallScreen, onClickBtn, callCustomer}) => {
    return (
        <>
            <View style={styles.customerContainer}>
                <Image style={styles.customerImage} source={require('../assets/images/CustomerImage.png')} />
                <View style={styles.customerDetailsViewLayer}>
                    <AppText style={{...styles.customerDetailsText, fontSize: 16}}>
                        Benjamin
                    </AppText>
                    <VerifiedSvg style={{color: Colors.greenColorLight, marginLeft: 10}} />
                </View>
                <View style={styles.customerDetailsViewLayer}>
                    <AppText style={{...styles.customerDetailsText, fontSize: 14, color: Colors.blueColorLight}}>
                        4.5
                    </AppText>
                    <View style={styles.customerRatingsContainer}>
                        <StarFilledSvg style={{color: Colors.greenColorLight}} />
                        <StarFilledSvg style={{color: Colors.greenColorLight}} />
                        <StarFilledSvg style={{color: Colors.greenColorLight}} />
                        <StarFilledSvg style={{color: Colors.greenColorLight}} />
                        <StarHalfFilledSvg style={{color: Colors.yellowColorLight}} />
                    </View>
                    <AppText style={{...styles.customerDetailsText, fontSize: 12}}>
                        (20)
                    </AppText>
                </View>
            </View>
            <View style={styles.jobDetailsLayerContainer}>
                <AppText weight="600" style={styles.jobDetailsCargoTitle}>
                    Cargo Details
                </AppText>
                <AppText weight="400" style={styles.jobDetailsCargoDescription}>
                    Cargo: Bags of Cement
                </AppText>
                <AppText weight="400" style={styles.jobDetailsCargoWeight}>
                    Weight: 1000 kg
                </AppText>
            </View>

            <View style={{...styles.jobDetailsLayerContainer, marginTop: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <LocationSvg style={{color: Colors.blueColorLight, marginRight: 10}} />
                    <AppText weight="400" style={{...styles.jobDetailsCargoWeight}}>
                        Pickup Location 
                    </AppText>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                    <PinMapSvg style={{color: Colors.blueColorLight, marginRight: 10}} />
                    <AppText weight="400" style={{...styles.jobDetailsCargoWeight}}>
                        Dropoff Location
                    </AppText>
                </View>
            </View>
            {
                callCustomer && <TouchableOpacity onPress={onClickBtn} style={styles.button}>
                    <PhoneSvg style={{color: Colors.whiteColor, marginRight: 10}} />
                    <AppText weight="800" style={styles.buttonText}>
                        Call
                    </AppText>
                </TouchableOpacity>
            }
            {
                !callCustomer && <ButtonItem text="Accept" onPressFn={() => onClickBtn()} />
            }
        </>
    )
}


const styles = StyleSheet.create({
    // profile
    customerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },
        customerImageContainer: {
            flex: 1,
           alignContent: 'center'
        },

        // customer details
        customerImage: {
            width: 96,
            height: 96,
            alignSelf: 'center',
            marginVertical: 10
        },
        customerDetailsViewLayer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 3,
        },
        customerDetailsText: {
            color: Colors.blackColorPearl,
            lineHeight: 24
        },
        customerRatingsContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },

        // job layer
        jobDetailsLayerContainer: {
            width: '100%',
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: Colors.borderColorGrey
        },
        jobDetailsCargoTitle: {
            color: Colors.blueColorLight,
            fontSize: FontSizes.xl,
            marginBottom: 5,
        }, 
        jobDetailsCargoDescription: {
            color: Colors.blackColorPearl,
            fontSize: FontSizes.lg,
            marginBottom: 3,
        }, 
        jobDetailsCargoWeight: {
            color: Colors.blackColorPearl,
            fontSize: FontSizes.md,
            marginBottom: 3,
        },  
   
        profileEditTextView: {
            paddingVertical: 4,
            paddingHorizontal: 8,
            backgroundColor: Colors.borderColorGrey,
            borderRadius: 8
        },

    //  button
    button: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderRadius: 4,
        backgroundColor: Colors.blueColorLight
    },
    buttonText: {
        fontSize: FontSizes.lg,
        color: Colors.whiteColor
    }
});

export default CustomerInfo
