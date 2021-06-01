import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';

const AppButton = ({
  onPress,
  text,
  colors,
  textStyle,
  containerStyle,
  LinearStyle = false,
}) => {
  return (
    <TouchableOpacity style={[styles.signIn, containerStyle]} onPress={onPress}>
      {LinearStyle ? (
        <LinearGradient colors={colors} style={[styles.signIn, containerStyle]}>
          <Text
            style={[
              styles.textSign,
              {
                color: '#fff',
              },
              textStyle,
            ]}>
            {text}
          </Text>
        </LinearGradient>
      ) : (
        <Text style={[styles.textSign, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
