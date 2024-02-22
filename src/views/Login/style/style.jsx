import {StyleSheet} from 'react-native';
import colorManager from '../../../Theme/colors/color';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colorManager.themeColor,
    width: '100%',
    height: '100%',
  },
  textStyle: {
    marginTop: 30,
    marginLeft: 50,
    fontSize: 24,
    color: colorManager.titleColor90,
    fontWeight: 'bold',
  },
  inputStyle: {
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    fontSize: 24,
    color: colorManager.titleColor90,
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: 'red',
    marginTop: 50,
    marginLeft: 50,
    fontSize: 20,
    width: 100,
    height: 50,
    color: 'gray',
  },
  icon: {
    width: 48.2 * 2,
    height: 51.8 * 2,
    marginTop: 50,
    marginLeft: 50,
  },
});

export default styles;
