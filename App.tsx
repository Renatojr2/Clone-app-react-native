import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/pages/Home';
import Login from './src/pages/Login';


const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator headerMode='none'>
       <Stack.Screen name='Login' component={Login}/>
       <Stack.Screen name='Home' component={Home} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

