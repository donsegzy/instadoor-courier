
import React from 'react';
import {
      ScrollView,
      View,
} from 'react-native';
  
   //components
import AuthScreenContainer from "../components/AuthScreenContainer";
import Container from "../components/Container";
import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import InputTextField from "../components/InputTextField";
import ButtonItem from '../components/ButtonItem';

import Colors from '../constants/colors';
 
const ResetPasswordScreen = ({navigation}) => {
    const submitNewPassword = () => {
        navigation.navigate("Home")
    }

    const resendEmail = () => {
        navigation.navigate("Register")
    }

    return (
        <AuthScreenContainer>
            <View style={{backgroundColor: Colors.pinkMedium, height: Platform.OS === 'ios' ? 70 : 50, marginTop: Platform.OS === 'ios' ? -50 : 0}} />

            <AuthHeader title={'Reset Password'} description={'We got you covered. Enter your email to get a reset link'} />
            <View style={Platform.OS === "ios" ? {marginVertical: 30, paddingHorizontal: 20} : {paddingHorizontal: 20, marginTop: 20} }>
                <InputTextField  label={'Email'} placeholderText={'Email'} keyboardInputType={'email-address'} />
                <View style={{marginVertical: 10}}>
                    <ButtonItem onPressFn={submitNewPassword} text="Submit" />
                </View>

                <AuthFooter questionText={'Didn’t get an email?'} authText={'Resend'} onPressFn={resendEmail} /> 
            </View>
         </AuthScreenContainer>
    );
};
  
 export default ResetPasswordScreen;
  