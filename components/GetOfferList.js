import React, {useRef} from 'react';
import {
    StyleSheet,
     View,
     FlatList,
     ScrollView,
     Dimensions
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import GetOfferItem from "./GetOfferItem";
import AppText from './AppText';
import OrderDetails from './OrderDetails';
import BottomSheet from "./BottomSheet";
import Timeline from "./Timeline";
import ButtonItem from './ButtonItem';

// constants
import Colors from '../constants/colors';
import FontSizes from '../constants/fontSizes';

// assets
import DoneSvg from "../assets/Icon/Done.svg";
import MarkerSvg from "../assets/Icon/Marker.svg";
import PinMapSvg from "../assets/Icon/PinMap.svg";


const GetOfferList = ({lists, headerComponent, footerComponent, listComponent, navigation}) => {
    const BottomSheetRef = useRef(null);
    const screenHeight = Dimensions.get('screen').height

    const acceptOffer = () => {
        BottomSheetRef.current.close();
        navigation.navigate('Delivery');
    }

    // temporary data
   const data = [
       {
           icon: '',
           text: "Home"
       },
       {
           icon: '',
           text: "Trips"
       },
       {
           icon: '',
           text: "History"
       },
       {
           icon: '',
           text: "Profile"
       },
       {
        icon: '',
        text: "Profile2"
        }, 
        {
            icon: '',
            text: "Profile3"
        },
        {
            icon: '',
            text: "Profile4"
        },
        {
            icon: '',
            text: "Profile5"
        },
   ]

   const OrderDetailsInfo = ({title, location, time}) => {
    return (
        <>
            <View style={styles.timelineContentContainer}>
                <AppText style={styles.timelineHeaderTitle}>
                    {title} 
                </AppText>
                <AppText style={styles.timelineContentTitle}>
                    {location}
                </AppText>
                <AppText style={styles.timelineContentText}>
                    {time}
                </AppText>
            </View>
        </>
    )
}

    const BottomSheetComponent = () => {
        return (
            <View style={{marginBottom: 10}}>
                <BottomSheet buttonTitle={'Show Customer Order'} height={ screenHeight > 830 ? hp('65') : hp('80%')} allowScrolling={true} refBottomSheet={BottomSheetRef}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, width: '100%', padding: 10}}>
                        <View style={{marginBottom: 30}}>
                            <OrderDetails title='Order Details' description='Milton Ward placed an order at MacDonald' />
                            <Timeline iconSvg={<MarkerSvg style={{marginTop: 2}} />} hideLine={true}  timelineComponent={<OrderDetailsInfo title={'Store Location'} location={'6391 Elgin St. Celina, Delaware 10299'} time={'15 mins away'} />} />
                            <Timeline iconSvg={<PinMapSvg style={{marginTop: 5}} />} hideLine={true} timelineComponent={<OrderDetailsInfo title={'Customer Location '} location={'2972 Westheimer Rd. Santa Ana, Illinois 85486 '} time={'45 mins trip'} />} />
                        </View>
                        <View style={styles.estimatedContainer}>
                            <AppText style={styles.estimatedContainerText}>
                                Estimated Cost
                            </AppText>
                            <AppText weight='600' style={{...styles.estimatedContainerText, color: Colors.pinkMedium}}>
                                $ 50.00
                            </AppText>
                        </View>
                        <View style={{marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <ButtonItem halfWidth btnType="white" text="Decline" />
                            <ButtonItem onPressFn={acceptOffer} halfWidth text="Accept" />
                        </View>
                    </ScrollView>
                </BottomSheet> 
            </View>
        )
    }



    return (
        
        <View style={styles.listSectionContainer}>
            <FlatList 
                ListHeaderComponent={headerComponent}
                ListFooterComponent={BottomSheetComponent}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item}) => <GetOfferItem item={item} onPressFn={() => BottomSheetRef.current.open()} />}
                keyExtractor={(item) => item.text}
            />
           
    </View>
    );
};

const styles = StyleSheet.create({

    listSectionContainer: {
        flex: 1,
    },

    // timeline section
    timelineContentContainer: {
        width: '95%'
    },
    timelineHeaderTitle: {
        color: Colors.pinkMedium,
        fontSize: FontSizes.md,
        lineHeight: 24
    },
    timelineContentTitle: {
        color: Colors.blackColorPearl,
        fontSize: FontSizes.lg,
        lineHeight: 24,
    },
    timelineContentText: {
        color: Colors.greyColorMedium,
        fontSize: 12,
        lineHeight: 16
    },

    estimatedContainer: {
        marginVertical: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: Colors.pinkLight,
        padding: 16,
        borderRadius: 8
    },
    estimatedContainerText: {
        fontSize: FontSizes.lg,
        lineHeight: FontSizes.xxl,
        color: Colors.blackColorPearl
    }
});

export default GetOfferList;
