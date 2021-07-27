import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Pressable,
    TouchableOpacity,
} from 'react-native';

//  components
import AppText from "../components/AppText"
import ModalItem from './ModalItem';

// assets
import LeftArrowSvg from "../assets/Icon/arrow-left 2.svg";
import SettingsSvg from "../assets/Icon/settings.svg";

// constants
import Colors from '../constants/colors'

const Header = ({currentScreen, customFn, settingsFn, navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.headerSection}>
            <View style={styles.headerLeftContainer}>
                <TouchableOpacity onPress={() => customFn()}>
                    <LeftArrowSvg style={styles.headerLeftSvg} />
                </TouchableOpacity>
                <AppText style={styles.headerLeftText}>
                    {currentScreen}
                </AppText>
            </View>

            {
                currentScreen === 'Delivery' && <View style={styles.titleImageContainer}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Image style={styles.titleImage} source={require('../assets/images/Avatar.png')} />
                    </Pressable>
                    <View style={styles.titleImageNotification} />
                    <ModalItem setModalVisible={setModalVisible} isModalVisible={modalVisible} navigation={navigation} />
                </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    headerSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    headerLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0.8
    },
    headerLeftSvg: {
        color: Colors.blueColorLight
    },
    headerLeftText: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.blackColorPearl,
    },
    headerRightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: .1
    },
    headerRightSvg: {
       paddingTop: 6,
        color: Colors.blueColorLight
    },

    titleImageContainer: {
        position: 'relative',
        flex: 0.2,
        alignItems: 'flex-end',  
    },
    titleImage: {
        width: 32,
        height: 32,
    },
    titleImageNotification: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 8,
        height: 8,
        borderRadius: 100,
        backgroundColor: Colors.greenMedium
    },
});

export default Header;