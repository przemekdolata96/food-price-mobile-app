import React from 'react';
import { createStackNavigator, createBottomTabNavigator , createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TabBarElement  from '../components/TabBarElement';
import McScreen from '../screens/McScreen';
import KFCScreen from '../screens/KFCScreen';
import BKScreen from '../screens/BKScreen';
import OthersScreen from '../screens/OthersScreen';

const mcTab = createStackNavigator({
  MCTab: McScreen,
});

mcTab.navigationOptions = {
  tabBarLabel: 'Mc Donalds',
  tabBarIcon: ({ focused }) => (
    <TabBarElement
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png'
      focused={focused}
    />
  ),
};

const kfcTab = createStackNavigator({
  KFCTab: KFCScreen,
});

kfcTab.navigationOptions = {
  tabBarLabel: 'KFC',
  tabBarIcon: ({ focused }) => (
    <TabBarElement
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/KFC_Logo.svg/713px-KFC_Logo.svg.png'
      focused={focused}
    />
  ),
};

const bkTab = createStackNavigator({
  BKTab: BKScreen,
});

bkTab.navigationOptions = {
  tabBarLabel: 'Burger King',
  tabBarIcon: ({ focused }) => (
    <TabBarElement
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Burger_King_Logo.svg/237px-Burger_King_Logo.svg.png'
      focused={focused}
    />
  ),
};

const otherTab = createStackNavigator({
  OtherTab: OthersScreen,
});

otherTab.navigationOptions = {
  tabBarLabel: 'Pozostałe',
  tabBarIcon: ({ focused }) => (
      <TabBarElement
        image='https://mbtskoudsalg.com/images/fast-food-worker-stock-png-8.png'
        focused={focused}
      />
    ),
  };
  
export default createMaterialTopTabNavigator({
  mcTab,
  kfcTab,
  bkTab,
  otherTab,
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: true,
    showIcon: true,
    labelStyle: {
      fontSize: 8,
      color: '#000'
    },
    style: {
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderColor: '#E0E0E0'
    },
    indicatorStyle: {
      backgroundColor: '#D32F2F'
    }
  }
});
