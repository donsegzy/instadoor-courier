import React, {useState, useRef} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import Container from "../components/Container";
import Header from '../components/Header'
import ButtonItem from '../components/ButtonItem';
import FilterList from '../components/FilterList'
import Wallet from '../components/Wallet';
import Tabs from "../components/Tabs";
import List from '../components/List';
import EarningOverviewList from '../components/EarningOverviewList';
import Pagination from '../components/Pagination'
import Footer from '../components/Footer';
import FooterContainer from '../components/FooterContainer';
import AppText from '../components/AppText';
import BottomSheet from "../components/BottomSheet";
import OrderDetails from '../components/OrderDetails';
import InputTextField from "../components/InputTextField";

import Colors from '../constants/colors';
import FontSizes from '../constants/fontSizes';


const WalletScreen = ({route, navigation}) => {
    const BottomSheetRef = useRef(null);

   const [currentTab, setCurrentTab] = useState("Earning Overview");
   const [currentFilterTab, setCurrentFilterTab] = useState("Today");

    const goToPrevPage = () => {
        navigation.goBack()
    }

    const withdrawEarningsFn = () => {
        BottomSheetRef.current.open();
    }

    const WalletScreenHeader = () => {
        return (
            <>
                <Header customFn={goToPrevPage} currentScreen={route.name} />
                <Wallet currency='$' amount="1000.00" />
                {
                    currentTab === "Earning Overview" && <ButtonItem text="Withdraw Earnings" onPressFn={withdrawEarningsFn} />
                }
                <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} tabs={['Earning Overview', 'Withdrawals']} />
                {
                    currentTab === "Earning Overview" && <FilterList currentFilterTab={currentFilterTab} setCurrentFilterTab={setCurrentFilterTab} list={['Today', 'Week', 'Month', 'All time']} />
                }
                
            </>
        )
    }

    return (
        <>
            <Container>
                {
                    currentTab === "Earning Overview" && currentFilterTab === "Today" && <List headerComponent={WalletScreenHeader} />
                }

                {
                    currentTab === "Earning Overview" && currentFilterTab === "Week" && <EarningOverviewList headerComponent={WalletScreenHeader} />
                }

                {
                    currentTab === "Earning Overview" && currentFilterTab === "Month" && <EarningOverviewList headerComponent={WalletScreenHeader} />
                }
                {
                    currentTab === "Earning Overview" && currentFilterTab === "All time" && <EarningOverviewList headerComponent={WalletScreenHeader} />
                }
                
                {
                    currentTab === "Withdrawals" && <List headerComponent={WalletScreenHeader} footerComponent={Pagination} />
                }
            </Container>
            <FooterContainer>
            <Footer screenName={route.name} navigation={navigation} />
            </FooterContainer>

            <BottomSheet buttonTitle={'Show Customer Order'} height={hp('55%')} allowScrolling={true} refBottomSheet={BottomSheetRef}>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, width: '100%', padding: 10}}>
                    <View style={{marginBottom: 30, width: '100%'}}>
                        <OrderDetails title='Withdrawal Details' description='The following amount will be withdrawn from your wallet. To your bank account.' addBgColor={true} />
                        <View style={{marginTop: 10}}>
                            <InputTextField label={'Amount'} placeholderText={'Enter Amount'} />
                        </View>
                        <View style={styles.infoTextContainer}>
                            <AppText style={styles.infoText}>
                                Available Amount: $ 1000.00
                            </AppText>
                        </View>
                    </View>
                    <View style={{marginBottom: 20}}>
                        <ButtonItem text="Confirm Withdrwal" />
                    </View>
                </ScrollView>
            </BottomSheet> 
        </>
    )
}

const styles= StyleSheet.create({
    infoTextContainer: {
        marginTop: -5
    },
    infoText: {
        fontSize: FontSizes.sm,
        lineHeight: FontSizes.lg,
        color: Colors.pinkMedium
    }
})

export default WalletScreen
