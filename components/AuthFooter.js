
import React from 'react';
import {
     StyleSheet,
     TouchableOpacity
 } from 'react-native';
 
  //components
import AppText from "../components/AppText"

 // constants
 import Colors from "../constants/colors"
 import FontSizes from "../constants/fontSizes";

 const AuthFooter = ({questionText, authText, onPressFn}) => {
     return (
        <TouchableOpacity onPress={onPressFn} style={{marginVertical: 10, marginBottom: 30}}>
            <AppText weight="600" style={styles.authFooterText}>
                {questionText} <AppText style={{color: Colors.pinkMedium}}> {authText}</AppText> 
            </AppText>
        </TouchableOpacity>
     );
 };
 
const styles = StyleSheet.create({
    authFooterText: {
        textAlign: 'center',
        fontSize: FontSizes.lg,
        lineHeight: 24,
        color: Colors.blackColorPearl
    }
 });
 
 export default AuthFooter;
 