/* eslint-disable prettier/prettier */
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

import { RestaurantCompactCard } from "../restaurant/restaurant-compact-card/restaurant-compact-card.component";
import { Spacer } from "../spacer/spacer.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

// FavouritesBar currently not showing RestaurantCompactCard component Image!

export const FavouritesBar = ({ favourites }) => {
  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name.split(" ").join("");
          return (
            <Spacer key={key} position="left" size="medium">
              <RestaurantCompactCard restaurant={restaurant} />
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
