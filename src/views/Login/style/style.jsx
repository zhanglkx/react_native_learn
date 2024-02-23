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
    borderRadius: 30,
  },
  inputBorderStyle: {
    borderRadius: 30,
    borderColor: 'lightgreen',
  },
  buttonStyle: {
    backgroundColor: 'lightgreen',
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
    fontSize: 20,
    color: 'gray',
    borderRadius: 30,
  },
  buttonLabelStyle: {
    color: colorManager.titleColor90,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 40,
  },
  icon: {
    width: 48.2 * 2,
    height: 51.8 * 2,
    marginTop: 50,
    marginLeft: 50,
  },
});

export default styles;
