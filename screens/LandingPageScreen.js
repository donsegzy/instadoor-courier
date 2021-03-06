import React, {useState, useEffect} from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Animated,
    Easing
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Svg, Rect, Mask, Defs, G, Pattern, Use, Image} from "react-native-svg"

const AnimatedRect = Animated.createAnimatedComponent(Rect)
const AnimatedSvg = Animated.createAnimatedComponent(Svg)
const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);
const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);

const LandingPageScreen = ({navigation}) => {

    const viewAnim = useState(new Animated.Value(1))[0]
    const fadingAnim = useState(new Animated.Value(1))[0]

    const colorAnim = viewAnim.interpolate({
        inputRange: [1,1.4],
        outputRange: ['rgb(255,255,255)', 'rgb(247,49,99)'],
        duration: 500,
        easing: Easing.circle
    })
    const bgColorAnim = viewAnim.interpolate({
        inputRange: [1,1.4],
        outputRange: ['rgb(247,49,99)', 'rgb(255,255,255)'],
        duration: 500,
        easing: Easing.circle
        }
    ) 
    
    const viewAnimation = () => {
        Animated.timing(
            viewAnim, {
                toValue: 1.4,
                duration: 1000,
                delay: 2000,
                easing: Easing.cicle,
                useNativeDriver: false
            }
        ).start(() => {
            setTimeout(
                () => {
                    fadingAnimation()
                }, 2000
            )
        })
    }

    const fadingAnimation = () => {
        Animated.timing(
            fadingAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }
        ).start(() => {
            setTimeout(
                () => {
                    navigation.navigate('Onboarding')
                }, 450
            )
        })
    }

    useEffect(() => {
        viewAnimation();
    }, [])

    return (
        <AnimatedSafeAreaView style={{...styles.landingContainer, backgroundColor : bgColorAnim}}>
            <AnimatedStatusBar backgroundColor={bgColorAnim} barStyle={'dark-content'} />
            <AnimatedSvg style={{marginBottom: hp('20%'), opacity: fadingAnim}} width="148" height="33" viewBox="0 0 148 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="148" height="33">
                    <AnimatedRect width="148" height="32.2535" fill="url(#pattern0)"/>
                </Mask>
                <G mask="url(#mask0)">
                    <AnimatedRect y="-7" width="140" height="46" fill={colorAnim}/>
                </G>
                <Defs>
                    <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <Use xlinkHref="#image0" transform="scale(0.0015456 0.0070922)"/>
                    </Pattern>
                    <Image id="image0" width="647" height="141" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAocAAACNCAYAAADFENCtAAAgAElEQVR4Ae2dCfh95bTHiwa5FYoMudGlVBSFwu1emStk6FIoUyrJLDNXF1EiQ4NZhQqlUiJSSkpUhjIWXcQluebxis991v+s/f/v3/6dPa99zt77fPfznOecPb3DZ6137+/Z+33Xu9pqWkRABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABKoRAG4GPB84B/gecOWCfb4JXAGcCNy7GjUdJQIiIAIiIAIiIAIjJABsCJg40jIhcAOwwwhNrSqJgAiIgAiIgAiIQDUCwAbAocC3gT9JJXJkNXI6SgREQAREQAREQARGTgDYCHgRcBnwO8CepC3acvHIzazqiYAIiIAIiIAIiEB9AsCNgUcDnwF+AfzfgqjE39SnpTNEQAREQAREQAREYMEIAPcAjgWu9tfPY32qeN2CmVbVFQEREAEREAEREIF2BIA1gD2BM4GfAn8d0VPF8YpDYF3gbsCuwN7Ac4FXAgenPi8EngHsDtwHuE07d2l2tpd1K2CXVFlfA7wVeBvwPuC41Of9vt3qYvXaA7gf8M/NStCPs4B/8Uf4Zqd3A58ELgG+7uEFrvLfXwY+BXwQeAPwTODBQ69/P6xQrRTAjYA7Ag91/of4P2qz2cVup+/6P2yzn/Xf+SzwIeAwYF/32fWr5Ti7o4A1zZf8mvA4r5/55Fvc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56g2sWA+tGkbP+gSgdv2bv6U1OZktXpdBdgrwLqL2fU73r/tGOA5Hndxg47rkFwr7LWpXSuO9HZg9vhJCz/N1t+CS1/jr79tMMVegLHrZG7vLpml0wbWBO7v1wy7vlifwLpdTGzQi12H3+RPTRvPE50u2yx/j4mD/7l/MHCgv8o/we9fdnUtOaUAAAW4SURBVJ+wdpHcO+23bTO72zH22t/OsT8Orf/M2oAjwPqz2/R6+wCv9KfI7/X7peVrH4v5mfy2++i73Zde6vednaxOs/SHeeQlcTgP6soznIALi1sD27gIMEFsr4MtPqAJWvvY78f4xcGO2yi8IEownIDbdkO/sN/H7WtC12xsI2DtYm0fs6kNeOg0HEnbCgI389fq9mfJym31sI/9gTIfTXzWvp/s+2wwj4mmLYFbtC3DkM631/zAnbz+xmlPZ2R/ePZ2PiYgTByvP6S61SmrONShpWPbEpA4bEtQ54uACIiACIiACIjAiAhIHI7ImKqKCIiACIiACIiACLQlIHHYlqDOFwEREAEREAEREIEREZA4HJExVRUREAEREAEREAERaEtA4rAtQZ0vAiIgAiIgAiIgAiMiIHE4ImOqKiIgAiIgAiIgAvMn4OLqbOBBQwwxJXE4fx9SCURABERABERABEZCADgV+IwHJ7U4nRaA2+KuWuzN7YdQzQ7E4e+HUG+VUQREQAREQAREQATCCQBvz0atT63bhA2/Br7sE0rcLrwAAQl2IA4/H1AsJSECIiACIiACIiACwyPgwetTejD3p03t+Ffgtz7D1ZstmH8fatyBODykD/VSGURABERABERABERg5gQAm9HpilxJWLzDpgu1KSAvBF5mac28AquttlqwOLR5qDefRz2UpwiIgAiIgAiIgAj0ggBwW+BM729YLAeL9/4O+DZwos8VPpMpIoGtM8WyvpOXAef5HNg2D3bR5wLfb3Pb37kXRlEhREAEREAEREAERGDeBIB1bRAKcBBwGvDTjOiqs2qvoC8Hjgf29fnmV++ijp52umz2RPPuXeSlNEVABERABERABERgYQkAGwAPAf7Ln8LZK9emy8+AS4AjgScCG0WBlTiMIql0REAEREAEREAERKAGAWBj4DHAEf7a1sLeNFnsqeJVgL3OPRTYGVivRlGWHCpxuASHVkRABERABERABERg9gSAG1v/PGBvf3X8PeCGJkrRz/kB8EngFf5qe62qtZI4rEpKx4mACIiACIiACIjAjAgA6wD3AJ4HnAL8BLDwN02WPwHfAE4C9gO2KqqGxGERHe0TAREQAREQAREQgR4QAG4O3N+DZ38O+GUTlejnXAt8BXiX91dcEowbuEMmbQ1I6YEPqAgiIAIiIAIiIAIikEvA+ys+0vsrXgT8ISPo6qxabMVzgcN8wMxumZMlDnMtoR0iIAIiIAIiIAIi0DMCwI2AzYC9gPcBVwIm6KIWicOe2VzFEQEREAEREAEREIHKBICbAtsCB3gA7WsAm9e56SJxWJm+DhQBERABERABERCBnhMA1gd2BF4OnA1cV1MlShz23MYqngiIgAiIgAiIgAg0JuD9FS0WosVE/GKF/or21FEzpDQmrhNFQAREQAREQAREYCAEvL/iHYHHA+/2/op/yTxZvB7YciBVUjFFQAREQAREQAREQASiCABrAncF9gFOBizszeuAtaPyUDoiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAKzIvD/ywrbkFen7m8AAAAASUVORK5CYII="/>
                </Defs>
            </AnimatedSvg>
        </AnimatedSafeAreaView>
    )
}

const styles = StyleSheet.create({
    landingContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default LandingPageScreen
