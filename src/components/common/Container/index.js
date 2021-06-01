import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';

export default function Container({style, children}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={(styles.wrapper, style)}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
