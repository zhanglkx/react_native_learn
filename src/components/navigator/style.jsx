import {StyleSheet} from 'react-native';
import colorManager from '../../Theme/colors/color';
const styles = StyleSheet.create({
  container: {
    width: 28,
    height: 28,
  },
  title: {
    fontSize: 10,
    color: colorManager.themeColor,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: colorManager.themeBgColor,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default styles;
