import React from "react";
import Info from "../Info/Info.component";
import Search from "../Search/Search.component";
import { HeaderBg, SearchContainer } from "./Header.styles";

const Header = () => {
  return (
    <>
      <HeaderBg>
        <SearchContainer>
          <h2>IP ADDRESS TRACKER</h2>
          <Search />
        </SearchContainer>
        <Info />
      </HeaderBg>
    </>
  );
};

export default Header;
