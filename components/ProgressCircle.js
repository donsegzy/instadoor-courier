import React from 'react';
import {
    StyleSheet,
     View,
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

//components
import AppText from "./AppText";

// constants
import Colors from "../constants/colors"

const ProgressCircleView = ({label, percentage, ratingValue, colorValue}) => {
    return (
        <View style={styles.progressContainer}>
            <AppText weight="400" style={styles.progressText}>
                {label}
            </AppText>
            <View style={styles.progressView}>
                <ProgressCircle 
                    percent={percentage}
                    radius={34}
                    borderWidth={4}
                    color={colorValue}
                    shadowColor={Colors.greyColorLight}
                    bgColor={Colors.whiteColor}
                > 
                    <AppText style={styles.progressViewText}> {ratingValue ? ratingValue : `${percentage}%`} </AppText>
                </ProgressCircle>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    progressContainer: {
        flex: .45,
        alignItems: "center",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.borderColorPink,
        backgroundColor: Colors.whiteColor
    },
    progressText: {
        fontSize: 12,
        lineHeight: 16,
        color: Colors.blackColorPearl
    },
    progressView: {
        position: 'relative',
        marginTop: 10
    },
    progressViewText: {
        color: Colors.blackColorPearl,
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default ProgressCircleView;
