import React from 'react'
import {
    StyleSheet,
    View,
    Platform,
    TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modal';

// components
import AppText from "./AppText";

// assets
import SettingSvg from "../assets/Icon/settings.svg"
import PersonSvg from "../assets/Icon/person 1.svg";
import LogoutSvg from "../assets/Icon/Logout.svg";


// constants
import Colors from "../constants/colors";
import FontSizes from "../constants/fontSizes";

const ModalItem = ({title, description ,isModalVisible, setModalVisible, navigation}) => {
    const navigateFn = (route) => {
        setModalVisible(!isModalVisible)
        navigation.navigate(route)
    }
    return (
        <>
        <Modal
            style={{width: 'auto', position: 'absolute', top: Platform.OS === 'ios' ? 40 : -10, right: Platform.OS === 'ios' ? 30 : 10}}
            isVisible={isModalVisible}
            animationIn="fadeIn"
            animationOutTiming={100}
            animationInTiming={100}
            animationOut="fadeOut"
            backdropOpacity={0}
            hasBackdrop={true}
            onBackdropPress={() => setModalVisible(!isModalVisible)}
            coverScreen={true}
            useNativeDriver={true}
            useNativeDriverForBackdrop={true}
            hideModalContentWhileAnimating={true}
        >
            <View style={styles.modalContainer}>
                <TouchableOpacity onPress={() => navigateFn('Profile')} style={styles.modalView}>
                    <PersonSvg />
                    <AppText weight="400" style={styles.modalDescription}>
                        Profile
                    </AppText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateFn('Settings')} style={styles.modalView}>
                    <SettingSvg style={{color: Colors.pinkMedium}} />
                    <AppText weight="400" style={styles.modalDescription}>
                        Settings
                    </AppText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateFn('Settings')} style={styles.modalView}>
                    <LogoutSvg style={{marginLeft: 5}} />
                    <AppText weight="400" style={styles.modalDescription}>
                        Log Out
                    </AppText>
                </TouchableOpacity>
            </View>
        </Modal>  
        </>     
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: Colors.whiteColor,
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
    },
    modalView: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10
    },
    modalDescription: {
        fontSize: FontSizes.lg,
        color: Colors.blackColorPearl,
        textAlign: 'justify',
        marginLeft: 10,
    },
    modalBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 10
    },
    modalBtnView: {
        flexDirection: 'row',
        width: 100,
    }
});

export default ModalItem;
