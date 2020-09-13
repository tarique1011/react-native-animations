import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {TabBarComponent} from './components';
import ListComponent from './ListComponent';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
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
