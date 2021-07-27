import React, {useState} from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import AppText from '../components/AppText';

// assets
import OnboardingOneSvg from '../assets/Icon/Onboarding1.svg'
import OnboardingTwoSvg from '../assets/Icon/Onboarding2.svg'
import OnboardingThreeSvg from '../assets/Icon/Onboarding3.svg'

// constants
import Colors from '../constants/colors';
import FontSizes from '../constants/fontSizes';

const OnboardingScreen = ({navigation}) => {
    const [currentScreen, setCurrentScreen] = useState(1)

    const goToWelcome = () => {
        navigation.navigate("Welcome")
    }


    const OnboardingComponent = ({title, description, InputSvg, nextScreen}) => {
        return (
            <>
                <View style={styles.onboardingSvgContainer}>
                    <InputSvg />
                </View>
                <View style={styles.textContainer}>
                    <AppText weight="700" style={styles.textContainerTitle}>
                        {title}
                    </AppText>

                    <AppText weight="400" style={styles.textContainerDescription}>
                        {description}
                    </AppText>
                </View>
                <View style={styles.carouselSection}>
                    <View style={styles.carouselContainer}>
                        <TouchableOpacity onPress={ currentScreen === 1 ? () => goToWelcome() : () => setCurrentScreen(currentScreen - 1)}>
                            <AppText weight="700" style={styles.carouselText}>
                                {   
                                    currentScreen === 1 && 'Skip Now'
                                }
                                {
                                    currentScreen !== 1 && 'Previous'
                                }
                            </AppText>
                        </TouchableOpacity>
                        <View style={styles.dotCarouselContainer}>
                            {
                                [1,2,3].map(item => 
                                        <View key={item} style={currentScreen === item ? dotCarousel.rectangle : dotCarousel.dot } />
                                    )
                            }
                        </View>
                        <TouchableOpacity onPress={currentScreen === 3 ? () => goToWelcome() : () => setCurrentScreen(nextScreen)}>
                            <AppText weight="700" style={styles.carouselText}>
                                {
                                    currentScreen === 3 && 'Got It'
                                }
                                {
                                    currentScreen !== 3 && 'Next'
                                }
                            </AppText>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.backgroundGrey}}>
            <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent={true} />
            {
                currentScreen === 1 &&  <OnboardingComponent 
                    InputSvg={OnboardingOneSvg} 
                    title={'Easy Access'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque egestas est nullam proin odio aliquam.'}
                    nextScreen={2}
                />
            }
            {
                currentScreen === 2 &&  <OnboardingComponent 
                    InputSvg={OnboardingTwoSvg} 
                    title={'Real-Time Tracking'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque egestas est nullam proin odio aliquam.'}
                    nextScreen={3}
                />
            }
            {
                currentScreen === 3 &&  <OnboardingComponent 
                    InputSvg={OnboardingThreeSvg} 
                    title={'Selected Drivers'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque egestas est nullam proin odio aliquam.'}
                    nextScreen={4}
                />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    onboardingSvgContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    // text
    textContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textContainerTitle: {
        fontSize: FontSizes.xxl,
        color: Colors.pinkMedium,
        lineHeight: 24,
        marginBottom: 10
    },
    textContainerDescription: {
        fontSize: FontSizes.lg,
        textAlign: 'center',
        lineHeight: 24,
        width: '90%'
    },

    carouselSection: {
        flex: .8,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    carouselContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    carouselText: {
        fontSize: FontSizes.md,
        lineHeight: FontSizes.xxxl,
        color: Colors.pinkMedium
    },
    dotCarouselContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const dotCarousel = StyleSheet.create({
    dot: {
        width: 8,
        height: 8,
        backgroundColor: Colors.borderColorPink,
        borderRadius: 100,
        marginHorizontal: 8,
    },
    rectangle: {
        width: 16,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
        backgroundColor: Colors.pinkMedium
    }
})
 

export default OnboardingScreen
