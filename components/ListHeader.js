import React from 'react';
import {
    StyleSheet,
     View,
} from 'react-native';

//components
import AppText from "../components/AppText"

// constants
import Colors from "../constants/colors"
import FontSizes from '../constants/fontSizes'

const ListHeader = ({title}) => {
    return (
        <View style={styles.listSection}>
            <AppText weight={styles.listHeader.fontWeight} style={styles.listHeader}>
                {title}
            </AppText>
        </View>
    );
};

const styles = StyleSheet.create({
   listSection: {
    marginVertical: 10,
    flex: 1,
   },
    listHeader: {
    marginBottom: 5,
    fontSize: FontSizes.xl,
    fontWeight: '700',
    lineHeight: 24,
    color: Colors.pinkMedium
    },
});

export default ListHeader;
