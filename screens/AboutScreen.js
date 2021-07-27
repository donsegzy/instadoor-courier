import React, {useState} from 'react'
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';

//components
import Container from "../components/Container";
import Header from "../components/Header";
import AppText from "../components/AppText";
import ListHeader from "../components/ListHeader";

// contants
import Colors from '../constants/colors'
import FontSizes from '../constants/fontSizes'

const AboutScreen = ({navigation, route}) => {

    return (
        <>
           <Container>
           <ScrollView showsVerticalScrollIndicator={false}>
           <Header customFn={() => navigation.goBack()} currentScreen={'About Us'} />
                <View style={{marginVertical: 10}}>
                    <ListHeader title={'Instadoor Courier'} />
                    <AppText weight="400" style={styles.aboutTextVersion}>
                        App Version 1.0
                    </AppText>

                    <AppText weight="400" style={styles.aboutTextParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit placerat porttitor quam adipiscing ornare mauris. Sagittis fermentum velit sed feugiat quis adipiscing sagittis aliquet eu. Ultrices vel, mi aliquam volutpat. Massa etiam diam.
                    </AppText>

                    <AppText weight="400" style={styles.aboutTextParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit placerat porttitor quam adipiscing ornare mauris. Sagittis fermentum velit sed feugiat quis adipiscing sagittis aliquet eu. Ultrices vel, mi aliquam volutpat. Massa etiam diam.
                    </AppText>

                </View>
           </ScrollView>
           </Container>
       </>
    )
}

const styles = StyleSheet.create({
    aboutTextVersion: {
        marginBottom: 10,
        fontSize: FontSizes.md,
        lineHeight: 24,
        color: Colors.pinkMedium
    },
     aboutTextParagraph: {
     marginVertical: 5,
     fontSize: FontSizes.lg,
     lineHeight: 24,
     color: Colors.blackColorPearl,
     textAlign: 'justify'
     },
 });

export default AboutScreen
