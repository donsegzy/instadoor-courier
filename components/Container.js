import React from 'react'
import {SafeAreaView, Platform, StatusBar, StyleSheet, View} from 'react-native';

// TODO: Confirm safe area view padding

const Container = (props) => {
    return (
    <SafeAreaView style={styles.AndroidSafeArea}>
        <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent={true} />
        <View style={{...styles.sectionContainer, ...props.style}}>
            <View style={styles.mainContainer}>
                {props.children}
            </View>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
    },

    // main content
    mainContainer: {
        flex: 1
    },

    AndroidSafeArea: {
        flex: 1,
        // backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
})

export default Container;