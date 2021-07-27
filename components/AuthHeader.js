
import React from 'react';
import {
     StyleSheet,
     ImageBackground,
     View,
     Platform,
     StatusBar
 } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

 
  //components
import AppText from "../components/AppText"

 // constants
 import Colors from "../constants/colors"
 import FontSizes from "../constants/fontSizes";

 const AuthHeader = ({title, description}) => {
 
     return (
         <>
            <StatusBar backgroundColor={Colors.pinkMedium} />
            <View style={styles.imageLanding}>
                <View style={styles.pinkStatusBar} /> 
                <View style={styles.authImageContainer}>
                    <AppText weight="800" style={styles.authImageHeader}>
                        {title}
                    </AppText>
                    <AppText weight="400" style={styles.authImageText}>
                        {description}
                    </AppText>
                </View>
            </View>
        </>
     );
 };
 
 const styles = StyleSheet.create({
    // pinkStatusBar: {
    //     backgroundColor: Colors.pinkMedium,
    //     height: 100,
    // },
    imageLanding:{
        height: hp('25%'),
        justifyContent: "center",
        alignItems: 'flex-start',
        backgroundColor: Colors.pinkMedium,
        padding: 20
    },
    authImageContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 10
    },
    authImageHeader: {
        fontSize: FontSizes.xxxl,
        lineHeight: 38,
        color: Colors.whiteColor
    },
    authImageText: {
        fontSize: FontSizes.lg,
        lineHeight: 24,
        color: Colors.whiteColor,
        // textAlign: 'center',
        marginTop: 8
    },
 });
 
 export default AuthHeader;
 