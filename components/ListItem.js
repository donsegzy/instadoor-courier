import React from 'react';
import {
    StyleSheet,
     View,
} from 'react-native';

//  components
import AppText from "../components/AppText"

// constants
import Colors from "../constants/colors"

const ListItem = ({item}) => {
    return (
        <View style={styles.listItemContainer}>
            <View style={styles.listItemView}>
                <AppText weight="400" style={styles.listItemText}>
                    Groceries Supply
                </AppText>
                <AppText weight="400" style={styles.listLocationDate}>
                    10-09-2020 02:00
                </AppText>
            </View>

            <View style={{...styles.listItemView, alignItems: 'flex-end'}}>
                <AppText weight="600" style={{...styles.listItemText, fontWeight: 'bold'}}>
                    $50.00
                </AppText>
                <AppText weight="400" style={styles.listItemStatus}>
                    Delivered
                </AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.borderColorPink,
        borderRadius: 4,
        backgroundColor: Colors.whiteColor,
        marginVertical: 5
    },
    listItemView: {
        flex: 1
    },
    listItemText: {
        fontSize: 16,
        color: Colors.blackColorPearl
    },
    listLocationDate: {
        paddingTop: 5,
        fontSize: 14,
        fontWeight: '400',
        color: Colors.greyColorMedium
    },
    listItemStatus: {
        paddingTop: 5,
        fontSize: 14,
        fontWeight: '400',
        color: Colors.greenColorLight
    }
});

export default ListItem;
