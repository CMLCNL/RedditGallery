import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '@constants/PageEnum';
import HomeScreen from '@screens/HomeScreen';
import DetailScreen from '@screens/DetailScreen';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer
      onReady={() => {
        console.log('onReady');
      }}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false, headerTransparent: true}}
          name={SCREENS.HomeScreen}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false, headerTransparent: true}}
          name={SCREENS.DetailScreen}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Route;
