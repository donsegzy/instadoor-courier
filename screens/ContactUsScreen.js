import React, {useState} from 'react'
import {
    View,
    ScrollView,
    StyleSheet,
    Platform
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'

//components
import Container from "../components/Container";
import Header from "../components/Header";
import AppText from "../components/AppText";
import InputTextField from "../components/InputTextField";
import TextArea from "../components/TextArea";
import ButtonItem from "../components/ButtonItem";

// contants
import Colors from '../constants/colors'
import FontSizes from '../constants/fontSizes'

const ContactUsScreen = ({navigation, route}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const showAlert = () => {
        navigation.navigate('Alert', {
            label: 'Thank You!',
            description: 'Your message is received. We will reach out to you as soon as we can.'
        })
    }

    return (
        <>
           <Container>
           <ScrollView showsVerticalScrollIndicator={false}>
           <Header customFn={() => navigation.goBack()} currentScreen={route.name} />
                <View style={{marginVertical: 10}}>

                        <AppText weight="400" style={{fontSize: FontSizes.lg, lineHeight: 24, color: Colors.blackColorPearl, marginBottom: 10}}>
                            Contact our support centre to report vehicle breakdown or issue
                        </AppText>

                        <InputTextField label={'Subject'} placeholderText="Enter subject" />
                        <TextArea label={'Message'} placeholderText="Enter your message..." />

                        <View style={styles.checkboxContainer}>
                            <CheckBox 
                                value={toggleCheckBox} 
                                onValueChange={() => setToggleCheckBox(!toggleCheckBox)} 
                                disabled={false}  
                                tintColors={
                                    {
                                        true: Colors.pinkMedium,
                                        false: Colors.greyColorMedium
                                    }
                                }
                                boxType={'square'}
                                tintColor={Colors.greyColorMedium}
                                onCheckColor={Colors.whiteColor}
                                onFillColor={Colors.pinkMedium}
                                onTintColor={Colors.pinkMedium}
                            />
                            <AppText weight="400" style={styles.checkboxContainerText}>
                                I want a call back
                            </AppText>
                        </View>
                </View>
                <View style={{marginTop: 10}}>
                        <ButtonItem onPressFn={showAlert} text="Send Message" />
                </View>
           </ScrollView>
           </Container>
       </>
    )
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginLeft: Platform.OS === 'ios' ? 1 : 0, 
        marginTop: Platform.OS === 'ios' ? 10 : 5
    },
    checkboxContainerText: {
        fontSize: FontSizes.md, 
        lineHeight: 24, 
        color: Colors.blackColorPearl, 
        marginLeft: Platform.OS === 'ios' ? 15 : 5
    }
})


export default ContactUsScreen
