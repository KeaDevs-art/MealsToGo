/* eslint-disable prettier/prettier */
import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants/restaurants-screen.component";
import { RestaurantDetail } from "../../features/restaurants/screens/restaurants/restaurants-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{headerShown: false, ...TransitionPresets.BottomSheetAndroid}}>
      <RestaurantStack.Screen
        name="Restaurant"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
