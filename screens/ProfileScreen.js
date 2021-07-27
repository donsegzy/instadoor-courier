import React from 'react';
import { View, StyleSheet, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native';

// components
import Header from "../components/Header";
import Container from "../components/Container";
import AppText from "../components/AppText";
import ProgressCircleView from "../components/ProgressCircle";
import ProfileTextField from '../components/ProfileTextField';

// constants
import Colors from '../constants/colors';
import FontSizes from "../constants/fontSizes"

// assets
import StarFilledSvg from "../assets/Icon/star filled.svg";
import StarHalfFilledSvg from "../assets/Icon/star half filled.svg";

const ProfileScreen = ({route, navigation}) => {
    return (
        <Container style={{marginBottom: 15}}>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                <Header customFn={() => navigation.goBack()} currentScreen={route.name} />
                <View style={styles.userContainer}>
                    <Image style={styles.userImage} source={require('../assets/images/userImage.png')} />
                    <View style={styles.userDetailsViewLayer}>
                        <AppText weight="600" style={{...styles.userDetailsText, fontSize: 16}}>
                            John Lawson
                        </AppText>
                    </View>
                    <View style={styles.userDetailsViewLayer}>
                        <AppText style={{...styles.userDetailsText, fontSize: 14, color: Colors.pinkMedium, marginRight: 10}}>
                            4.5
                        </AppText>
                        <View style={styles.userRatingsContainer}>
                            <StarFilledSvg style={{color: Colors.greenColorLight}} />
                            <StarFilledSvg style={{color: Colors.greenColorLight}} />
                            <StarFilledSvg style={{color: Colors.greenColorLight}} />
                            <StarFilledSvg style={{color: Colors.greenColorLight}} />
                            <StarHalfFilledSvg style={{color: Colors.yellowColorLight}} />
                        </View>
                        <AppText style={{...styles.userDetailsText, fontSize: 12, marginLeft: 10}}>
                            (20)
                        </AppText>
                    </View>
                </View>
                <View style={styles.progressSection}>
                        <ProgressCircleView label={'Order Success Rate'} percentage={95} colorValue={Colors.greenColorLight} />
                        <ProgressCircleView label={'Order Return Rate'} percentage={2} colorValue={Colors.redColorLight} />
                </View>
                <View style={styles.userDetailsContainer}>
                    <AppText weight="600" style={styles.userDetailsHeader}>
                        User Details
                    </AppText>
                    <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')}>
                        <AppText weight="600" style={styles.userDetailsHeaderText}>
                            Edit
                        </AppText>
                    </TouchableOpacity>
                </View>
                <ProfileTextField label="Gender" text="Male" />
                <ProfileTextField label="Phone" text="(671) 555-0110" />
                <ProfileTextField label="Email" text="john.lawson@example.com" />
                <ProfileTextField label="Address" text="4517 Washington Ave. Manchester, Kentucky 39495" />
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
       // profile
       userContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },
        userImageContainer: {
            flex: 1,
           alignContent: 'center'
        },

        // user details
        userImage: {
            width: 96,
            height: 96,
            alignSelf: 'center',
            marginVertical: 10
        },
        userDetailsViewLayer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 3,
        },
        userDetailsText: {
            color: Colors.blackColorPearl,
            lineHeight: 24
        },
        userRatingsContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        progressSection: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10
        },
       userDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
       },
       userDetailsHeader: {
           fontSize: FontSizes.xl,
           lineHeight: FontSizes.xxxl,
       },
       userDetailsHeaderText: {
           fontSize: FontSizes.md,
           color: Colors.pinkMedium
       }
})

export default ProfileScreen
