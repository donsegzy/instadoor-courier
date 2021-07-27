import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';

//  components
import AppText from "../components/AppText"

// assets 
import HomeSvg from "../assets/Icon/home 2.svg"
import SettingSvg from "../assets/Icon/settings.svg"
import WalletSvg from "../assets/Icon/wallet.svg"

// constants
import Colors from "../constants/colors"
 
const Footer = ({navigation, screenName}) => {

// TODO: clean up component

const data = [
    {
        icon: <HomeSvg style={screenName === 'Home' ? selectedScreen.footerSvg : styles.footerSvg}/>,
        text: "Home",
    },
    {
        icon: <WalletSvg style={screenName === 'Wallet' ? selectedScreen.footerSvg : styles.footerSvg}/>,
        text: "Wallet"
    },
    {
        icon: <SettingSvg style={screenName === 'Settings' ? selectedScreen.footerSvg : styles.footerSvg}/>,
        text: "Settings"
    },
]
const FooterView = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.text)} style={styles.footerContainer}>
        {item.icon}
        <AppText weight="400" style={screenName === item.text ? selectedScreen.footerText : styles.footerText}>
            {item.text}
        </AppText>
    </TouchableOpacity>
)

    return (
    <View style={styles.sectionContainer}>
        {
            data.map(item => <FooterView key={item.text} item={item} />)
        }
    </View>
    );
};

const baseFooterSvgStyle = {
    height: 65,
    width: 65,
}

const baseFooterTextStyle = {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    marginTop: 2
}
 
const styles = StyleSheet.create({
sectionContainer: {
    backgroundColor: Colors.whiteColor,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1,
    height: '100%',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
},
footerContainer: {
    flex: 0.33,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.whiteColor
},
footerSvg: {
    ...baseFooterSvgStyle,
    color: Colors.greyColorMedium
},
footerText: {
   ...baseFooterTextStyle,
    color: Colors.greyColorMedium,
}
});

const selectedScreen = StyleSheet.create({
footerSvg: {
   ...baseFooterSvgStyle,
    color: Colors.pinkMedium
},
footerText: {
    ...baseFooterTextStyle,
    color: Colors.pinkMedium
}
})



export default Footer;
 