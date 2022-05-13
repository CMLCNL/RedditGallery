import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer
      onReady={() => {
        console.log('onReady');
      }}>
      <Stack.Navigator>
        <Stack.Screen
          options={{title: 'Home'}}
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Route;
