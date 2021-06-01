import {Platform, StyleSheet} from 'react-native';

//const {height} = Dimensions.get('screen');
//const height_logo = height * 0.28;

export default StyleSheet.create({
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },

  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
});
