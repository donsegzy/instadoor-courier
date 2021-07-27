import React from 'react';
import {
     StyleSheet,
     View,
     Pressable
 } from 'react-native';

//  components
import AppText from "../components/AppText"

// constants
import Colors from "../constants/colors"
 
 const FilterList = ({list, currentFilterTab, setCurrentFilterTab}) => {
 
     return (
        <>
            <View style={styles.filterSection}>
                {
                    list.map((item) => <Pressable key={item} onPress={() => setCurrentFilterTab(item)} style={currentFilterTab === item ? selectedFilterStyle.filterView : styles.filterView}>
                            <AppText style={currentFilterTab === item ?  selectedFilterStyle.filterText: styles.filterText}>
                                {item}
                            </AppText>
                        </Pressable>
                    )
                }
            </View> 
        </>
     );
 };

 const styles = StyleSheet.create({

    filterSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginTop: 10
    },
    filterView: {
        height: 30,
        width: 72,
        paddingVertical: 3,
        paddingHorizontal: 14,
        flex: 0.23,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.borderColorPink,
        borderRadius: 16,
        backgroundColor: Colors.whiteColor,
    },
    filterText: {
        fontSize: 14,
        lineHeight: 18,
        color: Colors.pinkMedium
    }
 });

 const selectedFilterStyle = StyleSheet.create({
    filterView : {
        ...styles.filterView,
        backgroundColor: Colors.pinkMedium,
        borderColor: Colors.pinkMedium,
    },
    filterText: {
        ...styles.filterText,
        color: Colors.whiteColor
    }
 })

 
 export default FilterList;
 