import React from 'react';
import {
    StyleSheet,
     Text,
     View,
     FlatList,
} from 'react-native';

// components
import TripOffer from './TripOffer';

const TripOfferList = ({lists, headerComponent, footerComponent, listComponent, selectTripOffer}) => {
    // temporary data
   const data = [
       {
           title: 'Cargo Movement',
           location: "Cargo to be moved from 10, Adekunle close, Gbagada to Apapa Cresent, Ifako, Lagos",
           cargoSize: '6 Tonnes',
           priceRange: 'N 20,000 - N30,000'
       },
       {
           title: 'Cargo Movement',
           location: "Cargo to be moved from 10, Adekunle close, Gbagada to Apapa Cresent, Ifako, Lagos",
           cargoSize: '4 Tonnes',
           priceRange: 'N 20,000 - N30,000'
       },
       {
           title: 'Cargo Movement',
           location: "Cargo to be moved from 10, Adekunle close, Gbagada to Apapa Cresent, Ifako, Lagos",
           cargoSize: '4 Tonnes',
           priceRange: 'N 20,000 - N30,000'
       },
    //    {
    //        title: 'Cargo Movement',
    //        location: "Cargo to be moved from 10, Adekunle close, Gbagada to Apapa Cresent, Ifako, Lagos",
    //        cargoSize: '4 Tonnes',
    //        priceRange: 'N 20,000 - N30,000'
    //    },
    //    {
    //     title: 'Cargo Movement',
    //     location: "Cargo to be moved from 10, Adekunle close, Gbagada to Apapa Cresent, Ifako, Lagos",
    //     cargoSize: '4 Tonnes',
    //     priceRange: 'N 20,000 - N30,000'
    //     }, 
    //     {
    //         title: 'Cargo Movement',
    //         location: "Cargo to be moved from 10, Adekunle close, Gbagada to Apapa Cresent, Ifako, Lagos",
    //         cargoSize: '4 Tonnes',
    //         priceRange: 'N 20,000 - N30,000'
    //     },
   ]

    return (
        
        <View style={styles.listSectionContainer}>
            <FlatList 
                contentContainerStyle={{flexGrow: 1}}
                ListHeaderComponent={headerComponent}
                ListFooterComponent={footerComponent}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item,}) => <TripOffer selectTripOffer={selectTripOffer} item={item} />}
                keyExtractor={(item, index) => index}
            />
    </View>
    );
};

const styles = StyleSheet.create({

    listSectionContainer: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});

export default TripOfferList;
