import {Button, SafeAreaView, Text, View} from 'react-native';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {normalizeFontSize} from '../assets/fontSize';

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  console.log('home screen====');
  return (
    <SafeAreaView
      style={{
        ...backgroundStyle,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: normalizeFontSize(16),
          color: 'green',
        }}>
        welcome to the home
      </Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
