import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Pressable
} from 'react-native';

//  components
import AppText from "./AppText";

// assets
import CheveronLeftSvg from "../assets/Icon/chevron Left.svg";
import CheveronRightSvg from "../assets/Icon/chevron Right.svg";

// constants
import Colors from '../constants/colors'
import FontSizes from "../constants/fontSizes";

const Pagination = () => {

    return (
        <View style={styles.pageSection}>
            <View style={styles.pageLeft}>
                <CheveronLeftSvg style={{...styles.pageSvg, opacity: .3}} />
                <AppText weight="700" style={styles.pageText}> Prev </AppText>
            </View>

            <View style={styles.pageMiddle}>
                <AppText weight="700" style={{...styles.pageText, ...styles.pageMiddleText, ...styles.currentPage}}> 1 </AppText>
                <AppText weight="700" style={{...styles.pageText, ...styles.pageMiddleText}}> 2 </AppText>
                <AppText weight="700" style={{...styles.pageText, ...styles.pageMiddleText}}> 3 </AppText>
            </View>

            <View style={styles.pageRight}>
                <AppText weight="700" style={styles.pageText}> Next </AppText>
                <CheveronRightSvg style={styles.pageSvg} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
 pageSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20
},
pageLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
},
pageMiddle: {
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10
},
pageRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
},
pageSvg: {
    color: Colors.pinkMedium
},
pageText: {
    color: Colors.blackColorPearl,
    fontSize: FontSizes.md,
    lineHeight: 24,
    fontWeight: '700',
},
pageMiddleText: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 4,
},
currentPage:{
    backgroundColor: Colors.pinkMedium,
    color: Colors.whiteColor,
},
});

export default Pagination;