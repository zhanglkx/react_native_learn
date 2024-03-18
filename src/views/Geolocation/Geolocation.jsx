// import {
//   Text,
//   //StyleSheet,
//   View,
//   Alert,
// } from 'react-native';
// import React, {Component} from 'react';
// import Geolocation from '@react-native-community/geolocation';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Storage from '../AsyncStorage/storage';

// export default class Index extends Component {
//   componentDidMount() {
//     const location = Storage.get('coords');
//     // 组件加载时获取地理位置
//     if (location === undefined || location === '') {
//       /**
//        * 如果在PC模拟器上测试需要开启此选项才能获取位置信息
//        * enableHighAccuracy: true
//        * 指示浏览器获取高精度的位置，默认为 false。
//        * 当开启后，可能没有任何影响，
//        * 也可能使浏览器花费更长的时间获取更精确的位置数据。
//        */
//       /**
//        * 返回值
//        * coords:
//        *  accuracy: 5 //精确度
//        *  altitude: 5 //高度
//        *  heading: 0
//        *  latitude: 37.421998333333335 //纬度
//        *  longitude: -122.084 //经度
//        *  speed: 0 //速度(如果拿着手机在移动这个值不为0)
//        */
//       Geolocation.getCurrentPosition(
//         info => {
//           console.log(info);
//           // 获取地理位置成功后将其保存下来
//           AsyncStorage.setItem('coords', JSON.stringify(info.coords));
//         },
//         error => Alert.alert('报错', JSON.stringify(error)),
//         {
//           enableHighAccuracy: true,
//           timeout: 20000,
//         },
//       );
//     } else {
//       console.log(location);
//     }
//   }
//   render() {
//     return (
//       <View>
//         <Text>index</Text>
//       </View>
//     );
//   }
// }

// //const styles = StyleSheet.create({});
import {Text, SafeAreaView, Button} from 'react-native';
import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
export default function App() {
  const [latitude, setlatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const requestLocationPermission = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        setlatitude(position.coords.latitude);
        setlongitude(position.coords.longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  return (
    <SafeAreaView>
      <Button title="点击按钮获取定位" onPress={requestLocationPermission} />
      <Text>经度:{longitude}</Text>
      <Text>维度:{latitude}</Text>
    </SafeAreaView>
  );
}
