import React from 'react';
import {View, StatusBar, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import {LOGIN} from '../../../constants/routeName';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Animatable.View animation="bounceIn" duraton="1500">
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            Take a Date
          </Text>
        </Animatable.View>
      </View>
      <Animatable.View style={[styles.footer]} animation="fadeInUpBig">
        <Text style={styles.title}>Schedule And Track With Ease</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}
