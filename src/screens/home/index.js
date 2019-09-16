import React, { Component } from "react";
import {View, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ToastModule from "../../util/nativemodules/toastmodule/ToastModule"

type Props = {};

export class Home extends Component<Props> {
 render() {
    
    return (
      <View>
       <Text>hello how are you andrew </Text>
       <TouchableOpacity
       onPress={
         ()=>{
          ToastModule.show('Awesome', ToastModule.SHORT);
         }
       }>
         <Text>show toast on android</Text>
       </TouchableOpacity>
      </View>
    );
  }

} 

export default Home;
