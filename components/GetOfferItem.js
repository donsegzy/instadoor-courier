import React from 'react';
import {
    StyleSheet,
     View,
     TouchableWithoutFeedback
} from 'react-native';

//  components
import AppText from "../components/AppText"

// constants
import Colors from "../constants/colors"
import FontSizes from '../constants/fontSizes';


const GetOfferItem = ({item, onPressFn}) => {
    return (
        <TouchableWithoutFeedback onPress={onPressFn}>
            <View style={styles.itemContainer}>
                <AppText weight="500" style={styles.itemLabelText}>
                    Delivery to;
                </AppText>
                <AppText style={styles.itemDeliveryAddressText}>
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                </AppText>
                <View style={styles.itemEarningContainer}>
                    <AppText style={styles.itemEarningText}>
                        Potential Earning
                    </AppText>
                    <AppText weight="600" style={styles.itemAmountText}>
                        $ 50.00
                    </AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.borderColorPink,
        padding: 10,
        marginVertical: 5,
        backgroundColor: Colors.whiteColor
    },
    itemLabelText: {
        fontSize: FontSizes.xs,
        lineHeight: FontSizes.lg,
        textTransform: 'uppercase',
        letterSpacing: .2,
        color: Colors.textGreyMedium
    },
    itemDeliveryAddressText: {
        fontSize: FontSizes.md,
        lineHeight: FontSizes.xxxl,
        width: '85%'
    },
    itemEarningContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    itemEarningText: {
        fontSize: FontSizes.md,
        lineHeight: FontSizes.xxxl,
    },
    itemAmountText: {
        fontSize: FontSizes.lg,
        lineHeight: FontSizes.xxxl,
    }

})

export default GetOfferItem
