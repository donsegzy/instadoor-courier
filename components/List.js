import React from 'react';
import {
    StyleSheet,
     Text,
     View,
     FlatList,
} from 'react-native';

// components
import ListItem from "./ListItem"

const List = ({lists, headerComponent, footerComponent}) => {
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

    return (
        
        <View style={styles.listSectionContainer}>
            {/* <ListItem /> */}
            <FlatList 
                // contentContainerStyle={{flexGrow: 1}}
                ListHeaderComponent={headerComponent}
                ListFooterComponent={footerComponent}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item}) => <ListItem item={item} />}
                keyExtractor={(item) => item.text}
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

export default List;
