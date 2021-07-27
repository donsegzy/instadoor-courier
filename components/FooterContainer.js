import React from 'react';
import {
    StyleSheet,
     View,
} from 'react-native';

// constants
import Colors from "../constants/colors"

const FooterContainer = (props) => {
    return (
        <View style={styles.footerContainer}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: Colors.whiteColor,
        position: 'relative',
        flex: .1
    }
});

export default FooterContainer;
