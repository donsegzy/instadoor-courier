import React, {useState} from 'react';
import {
    StyleSheet,
    Pressable,
    View
} from 'react-native';

//components
import Container from "../components/Container";
import AppText from "../components/AppText";
import Header from "../components/Header";

// // assets
import PersonSvg from "../assets/Icon/person 1.svg";
import CashSvg from "../assets/Icon/cash 1.svg";
import LightBulbSvg from "../assets/Icon/light-bulb 2.svg";
import VerifiedSvg from "../assets/Icon/verified.svg";
import ChatSvg from "../assets/Icon/chat-alt 1.svg";
import ChevronRightSvg from "../assets/Icon/chevron Right.svg";
import LogoutSvg from "../assets/Icon/Logout.svg";

// constants
import Colors from "../constants/colors"
import FontSizes from "../constants/fontSizes";
import FooterContainer from '../components/FooterContainer';
import Footer from '../components/Footer';

const SettingsScreen = ({navigation, route}) => {

    const data = [
        {
            icon: <PersonSvg />,
            text: 'Profile'
        },
        {
            icon: <CashSvg />,
            text: 'Payment Settings'
        },
        {
            icon: <LightBulbSvg />,
            text: 'About Instadoor Courier'
        },
        {
            icon: <VerifiedSvg />,
            text: 'Security Settings'
        },
        {
            icon: <ChatSvg />,
            text: 'Contact Us'
        },
        {
            icon: <LogoutSvg />,
            text: 'Log Out'
        },
    ]
   
    return (
        <>
           <Container>
           <Header customFn={() => navigation.goBack()} currentScreen={route.name} />
            {
                data.map((setting) => <Pressable onPress={() => navigation.navigate(setting.text)} key={setting.text} style={styles.settingContainer}>
                        <View style={styles.svgContainer}>
                            {setting.icon}
                        </View>
                        <View style={styles.settingTextContainer}>
                            <AppText weight="600" style={styles.settingText}>
                                {setting.text}
                            </AppText>
                            <ChevronRightSvg style={{color: Colors.pinkMedium}} />
                        </View>
                    </Pressable>
                )
            }
           </Container>
           <FooterContainer>
               <Footer screenName={route.name} navigation={navigation} />
           </FooterContainer>
       </>
    );
};

const styles = StyleSheet.create({
    settingContainer: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.borderColorPink,
        borderRadius: 4,
        marginVertical: 10,
        backgroundColor: Colors.whiteColor
    },
    settingTextContainer: {
        flex: .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    svgContainer: {
        flex: .15,
    },
    settingText: {
        fontSize: FontSizes.lg,
        color: Colors.pinkMedium
    }
});

export default SettingsScreen;

