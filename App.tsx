import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/authNavigator';
import {RecoilRoot} from 'recoil';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <MyStack />
      </RecoilRoot>
    </NavigationContainer>
  );
}

export default App;
