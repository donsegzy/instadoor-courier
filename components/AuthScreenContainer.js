import React from 'react';
import {
      ScrollView,
      KeyboardAvoidingView,
      SafeAreaView,
} from 'react-native';

const ScreenContainer = (props) => {
    return (
        <KeyboardAvoidingView 
                {...(Platform.OS === 'ios' && { behavior: 'padding' })}
                style={{flex: 1}}
            >
                <ScrollView showsVerticalScrollIndicator={false} style={Platform.OS === 'ios' ? {flex: 1, paddingTop: 47} : { flex: 1} }>
                    {props.children}
                </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default ScreenContainer
