import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainDrawer from './MainDrawer';
import Preload from '../screens/Preload';
import Login from '../screens/Login';
import Property from '../screens/Property';
import Register from '../screens/Register';

const Stack = createStackNavigator();

export default () => {
  return(
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#f5f6fa',
        elevation: 0,
        shadowOpacity: 0,
      }
    }}>
      <Stack.Screen 
        name="Preload"
        component={Preload}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Property"
        component={Property}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Register"
        component={Register}
      />
      <Stack.Screen 
        name="MainDrawer"
        component={MainDrawer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}