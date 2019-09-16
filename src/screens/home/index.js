import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import ToastModule from '../../util/nativemodules/toastmodule/ToastModule';
import {TextInput} from 'react-native-gesture-handler';

type Props = {};

export class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  successCallback = successMessage => {
    alert('Received success call from Native Module ' + successMessage);
  };

  errorCallBack = errorMesssage => {
    alert('Received error from Native Module \n ' + errorMesssage);
  };

  sendCallBackToNativeModule() {
    ToastModule.show(
      this.state.inputText,
      ToastModule.SHORT,
      errorMesssage => {
        this.errorCallBack(errorMesssage);
      },
      successMessage => {
        this.successCallback(successMessage);
      },
    );
  }

  render() {
    if (Platform.OS === 'ios') {
      return (
        <View style={{flex: 1}}>
          <Text style={{alignSelf: 'center', marginTop: 20}}>
            Native Module Example{' '}
          </Text>

          <Text style={{alignSelf: 'center', marginTop: 20}}>
            For iOS native module is not created in this example check only for
            android
          </Text>
        </View>
      );
    } else
      return (
        <View style={{flex: 1}}>
          <Text style={{alignSelf: 'center', marginTop: 20}}>
            Native Module Example{' '}
          </Text>
          <View style={{alignSelf: 'center', flex: 1, marginTop: '60%'}}>
            <TextInput
              style={{
                borderRadius: 5,
                borderColor: 'gray',
                borderWidth: 2,
                height: 40,
                paddingHorizontal: 10,
              }}
              onChangeText={text => {
                this.setState({inputText: text});
              }}
            />
            <TouchableOpacity
              onPress={() => {
                this.sendCallBackToNativeModule();
              }}>
              <Text
                style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  backgroundColor: 'green',
                  paddingVertical: 15,
                  borderRadius: 10,
                  color: 'white',
                }}>
                Send Message To Native Module
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
  }
}

export default Home;
