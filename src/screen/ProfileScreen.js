import {Text} from 'react-native';

const ProfileScreen = ({navigation, route}) => {
  console.log('profile screen====');

  return <Text>This is {route.params.name}'s profile</Text>;
};
export default ProfileScreen;
