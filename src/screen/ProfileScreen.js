import {Image, Pressable, SafeAreaView, ScrollView, Text} from 'react-native';
import images from '../assets/images';
import {normalizeFontSize} from '../assets/fontSize';
import {useRecoilValue} from 'recoil';
import {countState} from '../recoilState';

const ProfileScreen = ({navigation, route}) => {
  console.log('profile screen====');
  const count = useRecoilValue(countState);
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
        <Text
          onPress={() => {
            navigation.navigate('Counter');
          }}>
          {route.params.name}'s profile {count}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;
