import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
     Text,
     View,
     ScrollView,
     Image,
     Button,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'


//  components
import AppText from "../components/AppText"

// constants
import Colors from "../constants/colors"
import FontSizes from '../constants/fontSizes';

const ToDo = ({item, setTodoCompleted, todoCompleted}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.todoContainer}>
           <View style={styles.todoCheckboxContainer}>
                <CheckBox 
                        value={toggleCheckBox} 
                        onValueChange={() => setToggleCheckBox(!toggleCheckBox)} 
                        // onChange={event => onChangeFn()}
                        disabled={false}  
                        tintColors={
                            {
                                true: Colors.blueColorLight,
                                false: Colors.greyColorMedium
                            }
                        }
                        boxType={'square'}
                        tintColor={Colors.greyColorMedium}
                        onCheckColor={Colors.whiteColor}
                        onFillColor={Colors.blueColorLight}
                        onTintColor={Colors.blueColorLight}
                />
           </View>
           <View style={styles.todoTitleContainer}>
               <AppText style={styles.todoItemTitle}>
                    {item.todo}
               </AppText>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoContainer: {
        padding: 16,
        borderWidth: 1,
        borderColor: Colors.borderColorGrey,
        borderRadius: 4,
        backgroundColor: Colors.whiteColor,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    todoCheckboxContainer: {
        marginRight: 10
    },
    
    todoItemTitle: {
        color: Colors.blackColorPearl,
        fontSize: FontSizes.md,
    }
});

export default ToDo;
