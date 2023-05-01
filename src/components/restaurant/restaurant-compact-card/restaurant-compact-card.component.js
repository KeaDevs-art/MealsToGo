/* eslint-disable prettier/prettier */
import React from "react";
import { Platform } from "react-native";
import { Text } from "../../typography/text.component";

import {
  CompactCard,
  CompactCardCover,
  CompactWebView,
  CompactInfo,
} from "./restaurant-compact-card.styles";

const isAndroid = Platform.OS === "android";

export const RestaurantCompactCard = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactCardCover;

  return (
    <CompactCard>
      <Image key={restaurant.name} source={{ uri: restaurant.photos[0] }} />
        <Text variant="caption">{restaurant.name}</Text>
    </CompactCard>
  );
};
