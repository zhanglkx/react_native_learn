import {StyleSheet} from 'react-native';
import colorManager from '../../../share/color/color';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colorManager.themeColor,
    width: '100%',
    height: '100%',
  },
  textStyle: {
    fontSize: 40,
    width: 100,
    height: 50,
    color: 'red',
    fontWeight: 'bold',
  },
  buttonStyle: {
    fontSize: 20,
    width: 100,
    height: 50,
    color: 'red',
    backgroundColor: 'blue',
    fontWeight: 'bold',
  },
  icon: {
    width: 48.2,
    height: 51.8,
    backgroundColor: 'red',
  },
});

export default styles;
