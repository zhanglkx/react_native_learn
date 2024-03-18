import {StyleSheet} from 'react-native';
import colorManager from '../../../Theme/colors/color';
import {Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colorManager.themeBgColor,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
  },
  itemSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
export default styles;
