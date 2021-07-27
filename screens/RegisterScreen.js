/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
     Platform,
     StatusBar,
     View,
 } from 'react-native';
 
  //components
import AuthScreenContainer from "../components/AuthScreenContainer";
import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";
import InputTextField from "../components/InputTextField";
import SelectTextField from "../components/SelectTextField";
import ButtonItem from '../components/ButtonItem';

import Colors from '../constants/colors';

 const RegisterScreen = ({navigation}) => {
     const goToHome = () => {
         navigation.navigate("Login")
     }
 
     const signIn = () => {
        navigation.navigate("Login")
    }
     return (   
        <AuthScreenContainer>
            <View style={{backgroundColor: Colors.pinkMedium, height: Platform.OS === 'ios' ? 70 : 50, marginTop: Platform.OS === 'ios' ? -50 : 0}} />
            <AuthHeader title={'Create Account'} description={'Sign up to secure an account with Instadoor'} />
            <View style={ Platform.OS === "ios" ? {marginTop: 20, marginBottom: 50, paddingHorizontal: 20} : {marginTop: 20, paddingHorizontal: 20}}>
                <InputTextField  label={'Full Name'} placeholderText={'Full name'}/>
                <InputTextField  label={'Email'} placeholderText={'Email'} keyboardInputType={'email-address'} />
                <InputTextField  label={'Phone'} placeholderText={'Phone'} keyboardInputType={'phone-pad'} />
                <InputTextField  label={'Password'} placeholderText={'Password'}/>
                <View style={{marginVertical: 10}}>
                    <ButtonItem onPressFn={goToHome} text="Create Account" />
                </View>
                <AuthFooter questionText={'Have an account?'} authText={'Sign In'} onPressFn={signIn} /> 
            </View>
        </AuthScreenContainer>
    );

 };
 
export default RegisterScreen;
 