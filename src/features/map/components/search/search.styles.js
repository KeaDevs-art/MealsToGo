/* eslint-disable prettier/prettier */
import styled from "styled-components/native";

import { View } from "react-native";
import { Searchbar } from "react-native-paper";

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const SearchBar = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
