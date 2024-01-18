/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, View, Text} from 'react-native';

function HomeScreen({navigation, route}) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      setTitle('useEffect执行');
    }
  }, [route.params?.post]);

  const [title, setTitle] = React.useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
      <Text style={{margin: 10}}>title: {title}</Text>
    </View>
  );
}

export default HomeScreen;
