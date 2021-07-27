import React from 'react'
import {
    StyleSheet,
     Text,
     View,
     FlatList,
     ScrollView
} from 'react-native';

import AppText from './AppText';

// constants
import Colors from '../constants/colors';
import FontSizes from '../constants/fontSizes';

const OrderDetails = ({title, description, addBgColor}) => {
    return (
        <>
            <View style={{...styles.orderDetailsLayerContainer, backgroundColor: addBgColor ? Colors.pinkLight : 'white'}}>
                <AppText weight="600" style={styles.orderDetailsTitle}>
                    {title}
                </AppText>
                <AppText weight="400" style={styles.orderDetailsDescription}>
                    {description}
                </AppText>
            </View> 
        </>
    )
}

const styles = StyleSheet.create({
          orderDetailsLayerContainer: {
            marginTop: 10,
            padding: 8,
            borderRadius: 8,
        },
        orderDetailsTitle: {
            color: Colors.pinkMedium,
            fontSize: FontSizes.xl,
            marginBottom: 5,
        }, 
        orderDetailsDescription: {
            color: Colors.blackColorPearl,
            fontSize: FontSizes.lg,
            marginBottom: 3,
        }, 
});


export default OrderDetails
