import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import GuiaScreen from '../screens/GuiaScreen';
import DicasScreen from '../screens/DicasScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Educação Ambiental' }}
        />
        <Stack.Screen
          name="Guia"
          component={GuiaScreen}
          options={{ title: 'Guia de Separação' }}
        />
        <Stack.Screen
          name="Dicas"
          component={DicasScreen}
          options={{ title: 'Dicas Ecológicas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
