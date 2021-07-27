import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

// assets
import DoneSvg from "../assets/Icon/Done.svg";

// constants
import Colors from "../constants/colors";
import FontSizes from "../constants/fontSizes";


const Timeline = ({iconSvg, timelineComponent, hideLine, elongateLine }) => {
    return (
        <View style={styles.timelineContainer}>
            <View style={elongateLine ? {...styles.timelineSection, height: '120%',} : {...styles.timelineSection}}>
                    <View style={{flexDirection:'column',justifyContent: "flex-start"}}>
                        <>
                              {iconSvg}
                            {/* {
                                iconSvg && <DoneSvg />
                            } */}
                        </>
                        <View style={hideLine ? {} :{...styles.line}} />
                    </View>
                    <View style={elongateLine ? {...styles.contentContainer, marginTop: -40, marginBottom: 40} : {...styles.contentContainer}}>
                        {/* // content */}
                        {timelineComponent}

                    </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    timelineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timelineSection:{ 
        flex:1,
        alignItems: 'stretch',
        flexDirection: 'row', 
        marginTop: 20
    },
    line: {
        height: '80%',
        width: 1,
        backgroundColor: Colors.pinkMedium,
        position: 'absolute',
        left: 15.5,
        top: 32,
    },
    contentContainer: {
        flexDirection:'column',
        justifyContent: 'center',
        marginLeft: 15
    },
    
});

export default Timeline
