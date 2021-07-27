import React from 'react'
import { View, StyleSheet} from 'react-native';

// components
import AppText from "../components/AppText";

// constants
import Colors from '../constants/colors';
import FontSizes from "../constants/fontSizes"


const Wallet = ({currency, amount}) => {
    return (
        <View style={styles.walletSection}>
        <AppText weight="500" style={styles.walletHeaderText}>
            Wallet Balance
        </AppText>
        <View style={styles.walletContainer}>
            <AppText weight="600" style={styles.walletCurrencyText}>
                {currency}
            </AppText>
            <AppText weight="700" style={styles.walletValueText}>
                {amount}
            </AppText>
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    // wallet section
    walletSection: {
        padding: 24,
        backgroundColor: Colors.darkGrey, 
        borderRadius: 8,  
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    walletHeaderText: {
        fontSize: FontSizes.xs,
        lineHeight: FontSizes.lg,
        color: Colors.whiteColor,
        marginBottom: 5,
        textTransform: 'uppercase',
        letterSpacing: .2,
    },
    walletContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    walletCurrencyText: {
        fontSize: FontSizes.lg,
        lineHeight: FontSizes.xxxl,
        color: Colors.whiteColor,
        marginRight: 5,
    },
    walletValueText: {
        fontSize: FontSizes.xxxxl,
        lineHeight: FontSizes.xfl,
        color: Colors.whiteColor,
        letterSpacing: 1,

    },

})

export default Wallet
