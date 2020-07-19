import React from 'react';
import {HomeScreen, SettingsScreen, SearchScreen, ProfileScreen} from './screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from './components';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarIcon: 'home'}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{tabBarIcon: 'magnifier'}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{tabBarIcon: 'settings'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarIcon: 'user'}}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
