import React from 'react';
import {HomeScreen} from './HomeScreen';
import {SettingsScreen} from './SettingsScreen';
import {SearchScreen} from './SearchScreen';
import {ProfileScreen} from './ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from './TabBar';

const Tab = createBottomTabNavigator();

const TabBarComponent = () => {
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

export {TabBarComponent};
