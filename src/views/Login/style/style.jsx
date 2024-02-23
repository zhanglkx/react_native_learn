import {StyleSheet} from 'react-native';
import colorManager from '../../../Theme/colors/color';
import {Dimensions} from 'react-native';
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
  inputAreaStyle: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    top: 200,
    height: 200,
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
    marginTop: 250,
    marginLeft: 50,
    marginRight: 50,
    fontSize: 20,
    color: 'gray',
    borderRadius: 30,
    height: 50,
  },
  buttonLabelStyle: {
    color: colorManager.titleColor90,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 35,
  },
  icon: {
    width: 48.2 * 2,
    height: 51.8 * 2,
    marginTop: 50,
    marginLeft: 50,
  },
  secretIconStyle: {
    position: 'absolute',
    backgroundColor: 'lightgreen',
    width: 20,
    height: 20,
    top: 47,
    right: 7,
  },
});

export default styles;
