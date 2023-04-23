/* eslint-disable prettier/prettier */
import styled from "styled-components/native";

import { FlatList } from "react-native";

export const Loading = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px;
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
