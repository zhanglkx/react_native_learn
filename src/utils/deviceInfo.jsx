import {Dimensions, StatusBar} from 'react-native';

/**
 *  获取当前导航栏高度
 * @returns {number}  NAVIGATION_BAR_HEIGHT 导航栏导读
 */
export function getNavHeight() {
  const DEVICE_HEIGHT = Dimensions.get('screen').height;
  const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
  const CONTENT_HEIGHT = Dimensions.get('window').height;

  // 估算导航栏高度
  const NAVIGATION_BAR_HEIGHT =
    DEVICE_HEIGHT - STATUS_BAR_HEIGHT - CONTENT_HEIGHT;

  return NAVIGATION_BAR_HEIGHT;
}
