import Color from 'color';
import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    SafeAreaView,
    Image,
    StatusBar
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// assets
import WelcomeSvg from "../assets/Icon/Welcome.svg"

// components
import AppText from '../components/AppText';
import ButtonItem from '../components/ButtonItem';

// constants
import Colors from '../constants/colors';
import FontSizes from '../constants/fontSizes';

const WelcomeScreen = ({navigation}) => {
    const goToLogin = () => {
        navigation.navigate("Login")
    }
    const goToRegister = () => {
        navigation.navigate("Register")
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor : Colors.backgroundGrey}}>
            <View style={{backgroundColor: Colors.pinkMedium, height: Platform.OS === 'ios' ? 50 : 0, marginTop: Platform.OS === 'ios' ? -50 : 0}} />
            <Image style={styles.imageGradient} source={require('../assets/images/WelcomeBackground.png')} />
            <View style={styles.welcomeContainer}>
                <AppText weight="700" style={styles.welcomeHeaderText}>
                    Welcome!
                </AppText>
                <AppText weight="400" style={styles.welcomeHeaderDescriptionText}>
                    Instadoor Food Delivery app for Couriers
                </AppText>
            </View>
            <View style={styles.welcomeSvgContainer}>
                <WelcomeSvg />
            </View>
            <View style={styles.buttonContainer}>
                <View style={{marginBottom: 15}}>
                    <ButtonItem onPressFn={goToRegister} text="Create Account" />
                </View>
                <ButtonItem onPressFn={goToLogin} text="Sign In" btnType="white" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    imageGradient: {
        width: '100%'
    },
    welcomeContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: hp('20%'),
    },
    welcomeHeaderText: {
        color: Colors.darkGrey,
        fontSize: FontSizes.xxxxl,
        lineHeight: FontSizes.xfl
    },
    welcomeHeaderDescriptionText: {
        color: Colors.darkGrey,
        fontSize: FontSizes.lg,
        lineHeight: FontSizes.xxxl
    },
    welcomeSvgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -100,
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        marginVertical: 30,
        flexDirection: 'column',
        flex: 1,
        paddingHorizontal: 20
    },

})

export default WelcomeScreen
