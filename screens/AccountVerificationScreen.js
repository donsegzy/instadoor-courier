
import React from 'react';
import {
      View,
} from 'react-native';
  
//components
import AuthScreenContainer from "../components/AuthScreenContainer";
import Container from "../components/Container";
import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import ButtonItem from '../components/ButtonItem';
import PinInput from '../components/PinInput';

import Colors from '../constants/colors';
 
const AccountVerificationScreen = ({navigation}) => {

    const confirmOtp = () => {
        navigation.navigate("Reset Password")
    }

    const resendOtp = () => {
        navigation.navigate("Register")
    }

    return (
        <AuthScreenContainer>
            <View style={{backgroundColor: Colors.pinkMedium, height: Platform.OS === 'ios' ? 70 : 50, marginTop: Platform.OS === 'ios' ? -50 : 0}} />
            <AuthHeader title={'Account Verification'} description={'Please input the OTP sent to your phone'} />
            <Container>
                <PinInput />

                <View style={{marginVertical: 10}}>
                    <ButtonItem onPressFn={confirmOtp} text="Confirm" />
                </View>

                <AuthFooter authText={'Didn’t get any OTP? Resend'} onPressFn={resendOtp} /> 
            </Container>
        </AuthScreenContainer>
    );
};

 export default AccountVerificationScreen;
  