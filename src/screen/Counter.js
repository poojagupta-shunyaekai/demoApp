import React from 'react';
import {useRecoilState} from 'recoil';
import {
  Image,
  Button,
  Pressable,
  View,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import images from '../assets/images';
import {normalizeFontSize} from '../assets/fontSize';
import {countState} from '../recoilState';

function Counter({navigation}) {
  const [count, setCount] = useRecoilState(countState);
  return (
    <SafeAreaView style={{marginHorizontal: normalizeFontSize(20), flex: 1}}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={images.backIcon}
          resizeMode="stretch"
          style={{height: normalizeFontSize(24), width: normalizeFontSize(24)}}
        />
      </Pressable>
      <ScrollView style={{flex: 1, marginVertical: normalizeFontSize(10)}}>
        <View>
          <Text>Count: {count}</Text>
          <Button title="Add" onPress={() => setCount(count + 1)}></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Counter;
