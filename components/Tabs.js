import React from 'react';
import {
    StyleSheet,
    View,
    Pressable
} from 'react-native';

//  components
import AppText from "../components/AppText"

// constants
import Colors from '../constants/colors'

const Tabs = ({currentTab, setCurrentTab, tabs}) => {

    return (
        <View style={styles.tabSection}>
            {
                tabs && tabs.map((tabName) => <View key={tabName} style={{flex: 1 / tabs.length}}>
                        <Pressable onPress={() => setCurrentTab(tabName)} style={currentTab === tabName ? {...styles.tab, backgroundColor: Colors.pinkMedium} : {...styles.tab}}>
                            <AppText style={ currentTab === tabName ? {...styles.tabText, color: Colors.whiteColor} : {...styles.tabText} }>
                                {tabName}
                            </AppText>
                        </Pressable>
                    </View>
                )
            }
    </View>
    )
}

const styles = StyleSheet.create({
    tabSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        padding: 4,
        borderWidth: 1,
        borderColor: Colors.borderColorPink,
        borderRadius: 9
    },

    tab: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 9,
    },

    tabText: {
        fontSize: 14,
        color: Colors.textGreyMedium
    },
});

export default Tabs;