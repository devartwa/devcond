import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StateProvider } from './contexts/StateContext';
import AuthStack from './stacks/AuthStack';

const App = () => {
  return(
    <StateProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </StateProvider>
  );
}

export default App;