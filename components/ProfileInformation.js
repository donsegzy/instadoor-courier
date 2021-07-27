import React from 'react';

//  components
import AppText from "../components/AppText"
import ListTextField from "../components/ListTextField"
 
 const Footer = ({currentTab}) => {
    //  TODO: Better Optimize the components by using flatlist or Array.map - depending on data

    const DriverInfo = () => (
        <>
            <ListTextField label={'Full Name'} text={'Benjamin Audu'} />
            <ListTextField label={'Email'} text={'name@example.com'} />
            <ListTextField label={'Phone'} text={'0812 345 6789'} />
            <ListTextField label={'Address'} text={'123, Okokomaiko, Ojo, Lagos'} />
            <ListTextField label={'Status'} text={'Dedicated Driver'} />
            <ListTextField label={'Drivers Licence Status'} text={'Valid Driver Licence'} />
        </>
    )

    const VehicleInfo = () => (
        <>
            <ListTextField label={'Vehicle Model'} text={'Man Deisel Truck'} />
            <ListTextField label={'Licence Plate'} text={'AA 123 LSD'} />
            <ListTextField label={'Color'} text={'Sky Blue'} />
            <ListTextField label={'Paper Status'} text={'Up to date'} />
            <ListTextField label={'Registered Since'} text={'16 April, 2021'} />
        </>
    )

    const PaymentInfo = () => (
        <>
            <ListTextField label={'Bank Name'} text={'Ecobank Nigeria'} />
            <ListTextField label={'Account Number'} text={'0123456789'} />
            <ListTextField label={'Account Name'} text={'Benjamin Audu'} />
            <ListTextField label={'Payment Method'} text={'Bank Deposit'} />
        </>
    )
 
     return (
         <>
            {
                currentTab === 'Driver' && <DriverInfo />
            }
            {
                currentTab === 'Vehicle' && <VehicleInfo />
            }
            {
                currentTab === 'Payment' && <PaymentInfo />
            }
        </>
     );
 };

 export default Footer;
 