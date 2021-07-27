import React, {useState,useEffect} from 'react';
import {
    StyleSheet,
     Text,
     View,
     FlatList,
} from 'react-native';

// components
import Todo from './Todo';

const TripOfferList = ({lists, headerComponent, footerComponent, setIsTodoCompleted, todoCompleted, setTodoCompleted}) => {
    // temporary data
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    useEffect(() => {
        if (todoCompleted === data.length) {
            setIsTodoCompleted(true)
        }
    }, [todoCompleted])

   const data = [
       {
           todo: 'Check Water Level',
       },
       {
           todo: 'Check Braking System',
       },
       {
           todo: 'Check Oil Level',
       },
       {
           todo: 'Confirm Document is in Place',
       },
       {
        todo: 'Check Electrical System',
       },
       {
        todo: 'Ensure you have a functional charger',
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
                renderItem={({item,}) => <Todo  toggleCheckBox={toggleCheckBox} setToggleCheckBox={setToggleCheckBox} item={item} />}
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
