import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AirlineHomeScreen from '../screens/AirlineHomeScreen';

const AirlineNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AirlineHomeScreen" component={AirlineHomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AirlineNavigation;
