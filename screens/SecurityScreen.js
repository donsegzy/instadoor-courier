import React from 'react';
import { View, ScrollView } from 'react-native';

// components
import Header from "../components/Header";
import Container from "../components/Container";
import InputTextField from "../components/InputTextField";
import ButtonItem from '../components/ButtonItem';

const SecurityScreen = ({route, navigation}) => {
    const resetPassword = () => {
        navigation.navigate('Alert', {
            label: 'Success',
            description: 'Your Transaction was successfull'
        })
    }

    return (
        <Container style={{marginBottom: 15}}>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                <Header customFn={() => navigation.goBack()} currentScreen={route.name} />
                    <InputTextField label={'Old Password'} placeholderText={'Enter old password'} />
                    <InputTextField label={'New Password'} placeholderText={'Enter new password'} />
                    <InputTextField label={'Confirm New Password'} placeholderText={'Enter confirm password'} />
                    <View style={{marginTop: 10}}>
                        <ButtonItem text="Update" onPressFn={resetPassword} />
                    </View>
            </ScrollView>
        </Container>
    )
}

export default SecurityScreen
