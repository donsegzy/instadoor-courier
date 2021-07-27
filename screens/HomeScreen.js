import React, {useState} from 'react';
import { View, StyleSheet, Pressable, Image, Switch } from 'react-native';

// components
import Container from "../components/Container";
import AppText from "../components/AppText";
import Wallet from '../components/Wallet';
import Tabs from "../components/Tabs";
import List from '../components/List';
import GetOfferList from '../components/GetOfferList';
import Footer from '../components/Footer';
import FooterContainer from '../components/FooterContainer';
import ModalItem from '../components/ModalItem';


// constants
import Colors from '../constants/colors';
import FontSizes from "../constants/fontSizes"

const HomeScreen = ({route, navigation}) => {
   const [isAvailable, setIsAvailable] = useState(false);
   const [currentTab, setCurrentTab] = useState("Get Offer");
   const [modalVisible, setModalVisible] = useState(false);

   const ListHeaderComponent = () => {
       return (
        <>
            <View style={styles.titleSection}>
                    <View style={styles.titleTextContainer}>
                        <AppText weight="700" style={styles.titleText}>
                            Hi John,
                        </AppText>
                    </View>
                    <View style={styles.titleImageContainer}>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <Image style={styles.titleImage} source={require('../assets/images/Avatar.png')} defaultSource={require('../assets/images/Avatar.png')} />
                        </Pressable>
                        <View style={styles.titleImageNotification} />
                        <ModalItem setModalVisible={setModalVisible} isModalVisible={modalVisible} navigation={navigation} />
                    </View>
                </View>

                <Wallet currency='$' amount="1000.00" />

                <View style={isAvailable ? availabilityStyles.availabilityContainer : unAvailabilityStyles.availabilityContainer}>
                    <View style={{flex: 1}}>
                        <AppText weight="700" style={isAvailable ? availabilityStyles.availabilityHeader : unAvailabilityStyles.availabilityHeader}>
                            {
                                isAvailable ? 'Available' : 'Unavailable'
                            }
                        </AppText>
                        <AppText> 
                            {
                                isAvailable ? 'Go offline if you need to get a break' : 'Go online to start taking offers'
                            }
                        </AppText>
                    </View>
                    <View>
                        <Switch
                            trackColor={{ false: Colors.inputBorderColor, true: Colors.greenMedium }}
                            thumbColor={Colors.whiteColor}
                            ios_backgroundColor={Colors.inputBorderColor}
                            onValueChange={() => setIsAvailable(!isAvailable)}
                            value={isAvailable}
                        />
                    </View>
                </View>
                <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} tabs={['Get Offer', 'Recent Orders']} />
        </>
       )
   }


    return (
        <>
            <Container>
                {
                    currentTab === "Get Offer" && <GetOfferList headerComponent={ListHeaderComponent} navigation={navigation} />
                }
                {
                    currentTab === "Recent Orders" && <List headerComponent={ListHeaderComponent} />
                }  
            </Container>
            <FooterContainer>
                <Footer screenName={route.name} navigation={navigation} />
            </FooterContainer>
        </>
    );
};

const styles = StyleSheet.create({
    // title section
    titleSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    titleTextContainer: {
        flex: 0.8,
    },
    titleText: {
        fontSize: FontSizes.xxl,
        fontWeight: 'bold',
        color: Colors.blackColorPearl
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
})

const unAvailabilityStyles = StyleSheet.create({
    // availability container
    availabilityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: .5,
        borderColor: Colors.borderColorPink,
        borderRadius: 8,
        backgroundColor: Colors.pinkLight,
        marginVertical: 10
    },
    availabilityHeader: {
        marginBottom: 5,
        fontSize: FontSizes.xl,
        lineHeight: 24,
        color: Colors.pinkMedium
    },
})

const availabilityStyles = StyleSheet.create({
    availabilityContainer: {
        ...unAvailabilityStyles.availabilityContainer,
        borderColor: Colors.greenMedium,
        backgroundColor: Colors.greenLight,
    },
    availabilityHeader: {
        ...unAvailabilityStyles.availabilityHeader,
        color: Colors.darkGrey
    }
})

export default HomeScreen;
