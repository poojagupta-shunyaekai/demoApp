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
import Slider from '../components/Slider';

function Counter({navigation}) {
  const [count, setCount] = useRecoilState(countState);
  return (
    <SafeAreaView style={{marginHorizontal: normalizeFontSize(20), flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={images.backIcon}
            resizeMode="stretch"
            style={{
              height: normalizeFontSize(24),
              width: normalizeFontSize(24),
            }}
          />
        </Pressable>
        <Text
          style={{
            textAlign: 'center',
            fontSize: normalizeFontSize(16),
            color: 'skyblue',
            fontWeight: 600,
            marginLeft: normalizeFontSize(10),
          }}>
          welcome to the counter page
        </Text>
      </View>
      <ScrollView style={{flex: 1, marginVertical: normalizeFontSize(10)}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>Count: {count}</Text>
          <Pressable
            style={{
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'skyblue',
              paddingHorizontal: 10,
              paddingVertical: 2,
              borderRadius: 4,
            }}
            onPress={() => setCount(count + 1)}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: normalizeFontSize(16),
                color: 'skyblue',
                fontWeight: 600,
              }}>
              Add
            </Text>
          </Pressable>
        </View>
        <Slider />
      </ScrollView>
    </SafeAreaView>
  );
}
export default Counter;
