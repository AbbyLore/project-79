import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ItemDonateScreen from '../screens/ItemDonateScreen';
import ItemRequestScreen from '../screens/ItemRequestScreen';



export const AppTabNavigator = createBottomTabNavigator({
  DonateItems : {
    screen: ItemDonateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Items",
    }
  },
  ItemRequest: {
    screen: ItemRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-Item.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Item Request",
    }
  }
});
