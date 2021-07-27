import React, {useState} from 'react';
import {
    ScrollView,
    View,
} from 'react-native';

//  components
import InputTextField from "../components/InputTextField";
import SelectTextField from "../components/SelectTextField";
import ButtonItem from '../components/ButtonItem'

const EditInformation = ({currentTab, setCurrentTab}) => {
    //  TODO: Better Optimize the components by using flatlist or Array.map - depending on data
    // TODO: check if you can fix the footer issue


    const DriverInfo = () => (
        <>
            <InputTextField label={'Full Name'} value={'Benjamin Audu'} />
            <InputTextField label={'Email'} value={'name@example.com'} />
            <InputTextField label={'Phone'} value={'0812 345 6789'} />
            <InputTextField label={'Address'} value={'123, Okokomaiko, Ojo, Lagos'} />
            <SelectTextField label={'Driver Status'} selectItems={['Dedicated Driver', 'Replacement Driver']} />
        </>
    )

    const VehicleInfo = () => (
        <>
            <InputTextField label={'Vehicle Model'} value={'Man Deisel Truck'} />
            <InputTextField label={'Licence Plate'} value={'AA 123 LSD'} />
            <InputTextField label={'Color'} value={'Sky Blue'} />
            <SelectTextField label={'Paper Status'} selectItems={['Up to date', 'Due for Maintenance']} />
            <SelectTextField label={'Registered Since'} selectItems={['16 April, 2021', 'Replacement Driver']} />
        </>
    )

    const PaymentInfo = () => (
        <>
            <SelectTextField label={'Bank Name'} selectItems={['Ecobank Nigeria', 'UBA Nigeria']} />
            <SelectTextField label={'Account Number'} selectItems={['0123456789', '0123456789']} />
            <InputTextField label={'Account Name'} value={'Benjamin Audu'} />
      </>
    )
 
     return (
         <ScrollView>
            {
                currentTab === 'Driver' && <>
                    <DriverInfo />
                    <View style={{marginVertical: 10}}>
                        <ButtonItem onPressFn={() => setCurrentTab('Vehicle')} text="Next" />
                    </View>
                </>
            }
            {
                currentTab === 'Vehicle' && <>
                    <VehicleInfo />
                    <View style={{marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <ButtonItem onPressFn={() => setCurrentTab('Driver')} halfWidth text="Previous" btnType="grey" />
                        <ButtonItem onPressFn={() => setCurrentTab('Payment')} halfWidth text="Next" />
                    </View>
                </>
            }
            {
                currentTab === 'Payment' && <>
                    <PaymentInfo />
                    <View style={{marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <ButtonItem onPressFn={() => setCurrentTab('Vehicle')} halfWidth text="Previous" btnType="grey" />
                        <ButtonItem halfWidth text="Update" />
                    </View>
                </>
            }
        </ScrollView>
     );
 };

export default EditInformation;
 