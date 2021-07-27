import React from 'react';
import {Button} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const BottomSheet = (props) => {
    return (
       <>
            {
                props.showButton && <Button title={props.buttonTitle} onPress={() => props.refBottomSheet.current.open()} />
            }
            <RBSheet
            ref={props.refBottomSheet}
            height={props.height ? props.height : 500}
            openDuration={250}
            closeOnDragDown={true}
            closeOnPressMask={true}
            dragFromTopOnly={props.allowScrolling ? true : false}
            customStyles={{
                container: {
                justifyContent: "flex-start",
                alignItems: "flex-start",
                paddingVertical: 8,
                paddingHorizontal: 24
                },
                draggableIcon: {
                }
            }}
            >
                {props.children}
            </RBSheet>
       </>
    )
}

export default BottomSheet;
