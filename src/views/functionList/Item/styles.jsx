import {StyleSheet} from 'react-native';
import colorManager from '../../../Theme/colors/color';
import {Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 56,
    backgroundColor: colorManager.themeColor,
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    padding: 10,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginTop: 5,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    width: Dimensions.get('window').width - 100,
    height: 56,
    backgroundColor: 'white',
    marginLeft: 10,
    marginTop: -10,
  },
  backImage: {
    width: 30,
    height: 30,
    right: 10,
  },
  mainTitle: {
    width: Dimensions.get('window').width - 110,
    height: 30,
    marginLeft: 5,
    backgroundColor: colorManager.themeColor,
  },
  subTitle: {
    width: Dimensions.get('window').width - 110,
    height: 26,
    marginLeft: 5,
    backgroundColor: 'red',
  },
});
export default styles;
