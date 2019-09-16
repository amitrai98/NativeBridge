import React from "react";
import { Text, View, Modal, TouchableHighlight} from "react-native";

const InputAlertBox = props => {
    const { AlertMessage,onOkPress } = props;
    return (
        <View style={{backgroundColor:'green'}}>
<Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop:'60%', height:'30%', width:'100%'}}>
            <View style={{flex:1, padding:20, backgroundColor:'red'}}>
              <Text>Hello World!</Text>

             
            </View>
          </View>
        </Modal>
        </View>
        
    );
};

export default InputAlertBox;
