import React from 'react';
import { View, StyleSheet, Image, ScrollView, SafeAreaView, StatusBar, KeyboardAvoidingView, Dimensions, FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import Header from "../components/Header";
import InputTextField from "../components/InputTextField";
import ButtonItem from '../components/ButtonItem';

// constants
import Colors from '../constants/colors';

const EditProfileScreen = ({route, navigation}) => {

    const iosScreenMarginTop = Dimensions.get('screen').height > 700 ? hp('1'): 15

    const data = [
        {
            label: 'Full Name',
            value: 'Benjamin Audu'
        },
        {
            label: 'Gender',
            value: 'Male'
        },
        {
            label: 'Phone',
            value: '(671) 555-0110'
        },
        {
            label: 'Email',
            value: 'john.lawson@example.com'
        },
        {
            label: 'Address',
            value: '4517 Washington Ave. Manchester'
        },
        {
            label: 'Country',
            value: 'Neatherland'
        },
        {
            label: 'State',
            value: 'Kentucky'
        },

    ]

    const updateProfileFn = () => {
        navigation.navigate('Alert', {
            label: 'Success',
            description: 'Your Transaction was successfull'
        })
    }

    const ListComponentHeader = () => {
        return (
            <>
                <View style={styles.headerView} />
                <View style={{paddingHorizontal: 20, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: iosScreenMarginTop}}>
                    <Header customFn={() => navigation.goBack()} currentScreen={"Profile"} />
                    <View style={styles.imageContainer}>
                        <Image style={styles.profileImage} source={require('../assets/images/EditProfile.png')} />
                    </View>
                </View>
            </>
        )
    }

    const ListComponentFooter = () => {
        return (
            <>
                <View style={{marginTop: 10, paddingHorizontal: 20, marginBottom: 40}}>
                    <ButtonItem text="Update" onPressFn={updateProfileFn} />
                </View>
            </>
        )
    }

    return (
        <>
            <SafeAreaView style={{backgroundColor: Colors.borderColorPink}} />

            <StatusBar backgroundColor={Colors.borderColorPink} barStyle={'dark-content'} translucent={true} />
            <KeyboardAvoidingView
                {...(Platform.OS === 'ios' && { behavior: 'padding' })}
                style={{flex: 1, position: 'relative'}}
                >
                <FlatList 
                    style={styles.sectionContainer}
                    ListHeaderComponent={ListComponentHeader}
                    ListFooterComponent={ListComponentFooter}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({item}) => <InputTextField addPadding label={item.label} value={item.value} />}
                    keyExtractor={(item) => item.label}
                />
                            
            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        paddingBottom: 20,
        // paddingHorizontal: 20,
    },
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: Colors.borderColorPink
      },
    headerView: {
        backgroundColor: Colors.borderColorPink,
        height: Dimensions.get('screen').height < 735 ? hp('20%') : hp('23'),
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    imageContainer: {
        // backgroundColor: Colors.borderColorPink,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    profileImage: {
        borderWidth: 1,
        borderColor: '#F73163',
        borderRadius: 1000
    }
})

export default EditProfileScreen;
