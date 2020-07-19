import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TabBarComponent} from './components';
import ListComponent from './ListComponent';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={ListComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen name="TabBar" component={TabBarComponent} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
