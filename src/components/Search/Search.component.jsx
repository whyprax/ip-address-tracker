import React, { useContext } from "react";
import { Image, Input, SearchWrapper } from "./Search.styles";
import icon from "../../images/icon-arrow.svg";
import { IpContext } from "../../context/IpData.context";

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(IpContext);
  // console.log("Search", searchTerm);

  const submitHandler = () => {
    if (!searchTerm) {
      alert("Enter Input Value");
    }
  };

  return (
    <SearchWrapper>
      <Input
        placeholder="Search for any IP address or domain"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Image src={icon} onClick={submitHandler} />
    </SearchWrapper>
  );
};

export default Search;
