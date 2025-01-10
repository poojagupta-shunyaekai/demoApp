import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import images from '../assets/images';
import {normalizeFontSize} from '../assets/fontSize';
import {useRecoilValue} from 'recoil';
import {countState} from '../recoilState';

const ProfileScreen = ({navigation, route}) => {
  console.log('profile screen====');
  const count = useRecoilValue(countState);
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
          welcome to the {route.params.name}'s profile
        </Text>
      </View>
      <ScrollView style={{flex: 1, marginVertical: normalizeFontSize(10)}}>
        <Text
          onPress={() => {
            navigation.navigate('Counter');
          }}>
          counter value is : {count}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;
