import React, { useContext, useState, useEffect } from "react";

import { LocationContext } from "../../../../services/location/location.context";

import { SearchContainer } from "./search.styles";
import { SearchBar } from "./search.styles";

const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <SearchBar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={() => onFavouritesToggle(!isFavouritesToggled)}
        placeholder="Search"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

export default Search;
