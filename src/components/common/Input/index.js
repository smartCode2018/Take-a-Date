import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import styles from './style';

export default function AppInput({
  onChangeText,
  inputStyle,
  labelStyle,
  label,
  value,
  iconColor,
  iconSize = 20,
  iconName,
  typePassword = false,
  showCheckIcon,
  updateSecureTextEntry,
  hidePassword,
  ...otherProps
}) {
  return (
    <>
      {label && <Text style={[styles.text_footer, labelStyle]}>{label}</Text>}
      <View style={styles.action}>
        {iconName && (
          <Feather name={iconName} color={iconColor} size={iconSize} />
        )}
        <TextInput
          placeholderTextColor="#666666"
          style={[styles.textInput, inputStyle]}
          onChangeText={onChangeText}
          value={value}
          {...otherProps}
        />
        {showCheckIcon ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null}

        {typePassword && (
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {hidePassword ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}
