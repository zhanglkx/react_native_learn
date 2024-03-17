// import React, {useState} from 'react';
// import {View, TouchableOpacity} from 'react-native';

// import {NativeModules} from 'react-native';

// import {TextInput, Icon, Text} from 'react-native-paper';
// import styles from './style';

// const PasswordInput = () => {
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   const CalendarManager = NativeModules.CalendarManager;
//   CalendarManager.addEvent(
//     'Birthday Party',
//     '4 Privet Drive, Surrey-哈哈哈哈我实现原生混编啦',
//   );

//   return (
//     <View style={{flexDirection: 'row', alignItems: 'center'}}>
//       <TextInput
//         mode="outlined"
//         label="Password"
//         secureTextEntry={!isPasswordVisible}
//         right={
//           <TouchableOpacity onPress={togglePasswordVisibility}>
//             {/* <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} /> */}
//             <Text style={{fontSize: 12, width: 12, height: 12}}>11111</Text>
//           </TouchableOpacity>
//         }
//       />
//     </View>
//   );
// };

// export default PasswordInput;

import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {Button} from 'react-native-paper';

const CITY_NAMES = ['北京', '上海', '广州', '深圳', '成都', '武汉', '南京'];

// type Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigator: props.navigator,

      isLoading: false, //默认没有下拉刷新
      dataArray: CITY_NAMES, //默认数据
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          mode="text"
          labelStyle={styles.buttonLabelStyle}
          label="进入应用"
          style={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate('About')}>
          进入应用
        </Button>
        <FlatList
          data={this.state.dataArray}
          renderItem={data => this.renderItemView(data)}
          //设置下拉刷新样式
          refreshControl={
            <RefreshControl
              title={'Loading'} //android中设置无效
              colors={['red']} //android
              tintColor={'red'} //ios
              titleColor={'red'}
              refreshing={this.state.isLoading}
              onRefresh={() => {
                this.loadData(); //下拉刷新加载数据
              }}
            />
          }
          //设置上拉加载
          ListFooterComponent={() => this.renderLoadMoreView()}
          onEndReached={() => this.loadMoreData()}
        />
      </View>
    );
  }

  //条目布局
  renderItemView(data) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{data.item}</Text>
      </View>
    );
  }

  //下拉刷新数据
  loadData() {
    this.setState({
      isLoading: true,
    });

    //模拟网络请求
    setTimeout(() => {
      //把数据反转
      let newArray = [];
      for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
        newArray.push(this.state.dataArray[i]);
      }
      this.setState({
        isLoading: false,
        dataArray: newArray,
      });
    }, 3000);
  }

  //上拉加载布局
  renderLoadMoreView() {
    return (
      <View style={styles.loadMore}>
        <ActivityIndicator
          style={styles.indicator}
          size={'large'}
          color={'red'}
          animating={true}
        />
        <Text>正在加载更多</Text>
      </View>
    );
  }

  //上拉加载更多数据
  loadMoreData() {
    //模拟网络请求
    setTimeout(() => {
      let newArray = [];
      for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
        newArray = this.state.dataArray.concat(CITY_NAMES);
      }
      this.setState({
        dataArray: newArray,
      });
    }, 3000);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#169',
    height: 200,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 20,
  },

  loadMore: {
    alignItems: 'center',
  },
  indicator: {
    color: 'red',
    margin: 10,
  },
});
