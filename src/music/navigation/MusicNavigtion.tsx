import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MusicDetailsScreen from '../screens/MusicDetailsScreen';
import MusicHomeScreen from '../screens/MusicHomeScreen';

const MusicNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MusicHomeScreen" component={MusicHomeScreen} />
        <Stack.Screen
          name="MusicDetailsScreen"
          component={MusicDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MusicNavigation;
