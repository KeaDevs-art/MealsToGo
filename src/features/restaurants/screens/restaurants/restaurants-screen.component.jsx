/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { FavouritesBar } from "../../../../components/favourites/favourites-bar.component";
import { RestaurantInfoCard } from "../../components/restaurant-info-card.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { SafeArea } from "../../../../utils/safe-area.component";
import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../../services/favourites/favourites.context";

import { Loading, RestaurantList } from "./restaurants-screen.styles";
import Search from "../../components/search/search.component";

// ------------------------------ Imports ----------------------- Imports --------------------------Imports --------------------

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={setIsToggled}
      />
      {isLoading && (
        <Loading>
          <ActivityIndicator
            size={50}
            animating={true}
            color={MD2Colors.red800}
          />
        </Loading>
      )}
      {isToggled && <FavouritesBar favourites={favourites} />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
