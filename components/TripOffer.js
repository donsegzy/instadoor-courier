import React from 'react';
import {
    StyleSheet,
     Text,
     View,
     ScrollView,
     Image,
     Button,
     TouchableWithoutFeedback
} from 'react-native';

//  components
import AppText from "../components/AppText"

// constants
import Colors from "../constants/colors"
import FontSizes from '../constants/fontSizes';

const TripOffer = ({item, selectTripOffer}) => {
    // console.log(item)
    return (
        <TouchableWithoutFeedback onPress={selectTripOffer} >
            <View style={styles.listItemContainer}>
                <AppText weight="600" style={styles.listItemTitle}>
                    {item.title}
                </AppText>
                <AppText weight="400" style={styles.listItemDescription}>
                    {item.location}
                </AppText>
                <View style={{marginVertical: 10}}>
                    <AppText weight="400" style={styles.listItemSizeTitle}>
                        Cargo Size
                    </AppText>
                    <AppText weight="400" style={styles.listItemSizeText}>
                        {item.cargoSize}
                    </AppText>
                </View>
                <View>
                    <AppText weight="400" style={styles.listItemSizeTitle}>
                        Price Range
                    </AppText>
                    <AppText weight="600" style={styles.listItemSizeText}>
                        {item.priceRange}
                    </AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        padding: 16,
        borderWidth: 1,
        borderColor: Colors.borderColorGrey,
        borderRadius: 8,
        backgroundColor: Colors.whiteColor,
        marginVertical: 10
    },
    listItemTitle: {
        color: Colors.blueColorLight,
        fontSize: FontSizes.lg,
    },
    listItemDescription: {
        fontSize: FontSizes.sm,
        color: Colors.blackColorPearl,
        marginTop: 4
    },
    listItemSizeTitle: {
        fontSize: FontSizes.sm,
        textTransform: 'uppercase',
        color: Colors.greyColorMedium
    },
    listItemSizeText: {
        fontSize: FontSizes.xl,
        color: Colors.blackColorPearl
    },
});

export default TripOffer;
