/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
      View,
     Platform,
  } from 'react-native';
  
   //components
 import AuthScreenContainer from "../components/AuthScreenContainer";
 import AuthHeader from "../components/AuthHeader";
 import AuthFooter from "../components/AuthFooter";
 import InputTextField from "../components/InputTextField";
 import ButtonItem from '../components/ButtonItem';
 
 import Colors from '../constants/colors';
 
  const LoginScreen = ({navigation}) => {
      const goToHome = () => {
          navigation.navigate("Account Verification")
      }
 
      const signUp = () => {
         navigation.navigate("Register")
     }
  
      return (
         <AuthScreenContainer>
            <View style={{backgroundColor: Colors.pinkMedium, height: Platform.OS === 'ios' ? 70 : 50, marginTop: Platform.OS === 'ios' ? -50 : 0}} />
             <AuthHeader title={'Welcome Back'} description={'Enter your login details to get back into your account'} />
                 <View style={Platform.OS === "ios" ? {marginVertical: 30, paddingHorizontal: 20} : {paddingHorizontal: 20, marginTop: 20} }>
                     <InputTextField  label={'Email'} placeholderText={'Email'} keyboardInputType={'email-address'} />
                     <InputTextField  label={'Password'} placeholderText={'Password'} altLabelText={'Forgot Password?'} />
                     <View style={{marginVertical: 10}}>
                         <ButtonItem onPressFn={goToHome} text="Login" />
                     </View>
 
                     <AuthFooter questionText={'New here?'} authText={'Sign Up'} onPressFn={signUp} /> 
                 </View>
         </AuthScreenContainer>
      );
  };
  
 export default LoginScreen;
  