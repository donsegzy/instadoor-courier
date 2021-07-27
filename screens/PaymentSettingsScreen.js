import React from 'react';
import { View, ScrollView } from 'react-native';

// components
import Header from "../components/Header";
import Container from "../components/Container";
import InputTextField from "../components/InputTextField";
import ButtonItem from '../components/ButtonItem';

const PaymentSettingsScreen = ({route, navigation}) => {
    const enterPaymentMethod = () => {
        navigation.navigate('Alert', {
            label: 'Success',
            description: 'Your Transaction was successfull'
        })
    }

    return (
        <Container style={{marginBottom: 15}}>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                <Header customFn={() => navigation.goBack()} currentScreen={route.name} />
                    <InputTextField label={'Bank Name'} placeholderText={'Enter bank name'} />
                    <InputTextField label={'Account Number'} placeholderText={'Enter account number'} />
                    <InputTextField label={'Account Holder Name'} placeholderText={'Enter account name'} />
                    <InputTextField label={'Prefered Payment Method'} placeholderText={'Enter payment method'} />
                    <View style={{marginTop: 10}}>
                        <ButtonItem text="Update" onPressFn={enterPaymentMethod} />
                    </View>
            </ScrollView>
        </Container>
    )
}

export default PaymentSettingsScreen
