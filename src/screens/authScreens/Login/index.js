import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import AppInput from '../../../components/common/Input';
import AppButton from '../../../components/common/Button';

export default function LoginScreen({navigation}) {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
        <AppInput
          placeholder="Your Email"
          placeholderTextColor="#666666"
          autoCapitalize="none"
          label="Email"
          iconName="user-o"
          onChangeText={val => textInputChange(val)}
          showCheckIcon={data.check_textInputChange}
        />

        <AppInput
          placeholder="Your Password"
          placeholderTextColor="#666666"
          autoCapitalize="none"
          labelStyle={{marginTop: 35}}
          label="Password"
          iconName="unlock-alt"
          onChangeText={val => handlePasswordChange(val)}
          //extra settings for a password input
          typePassword={true}
          secureTextEntry={data.secureTextEntry ? true : false}
          updateSecureTextEntry={updateSecureTextEntry}
          hidePassword={data.secureTextEntry}
        />

        <TouchableOpacity>
          <Text style={{color: '#009387', marginTop: 15}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <AppButton
            colors={['#08d4c4', '#01ab9d']}
            text="Sign In"
            LinearStyle={true}
            onPress={() => alert('Welcome')}
          />
          <AppButton
            text="Sign Up"
            containerStyle={{
              borderColor: '#009387',
              borderWidth: 1,
              marginTop: 15,
            }}
            textStyle={{color: '#009387'}}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </Animatable.View>
    </View>
  );
}
