import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const IpContext = createContext({
  ipData: {},
  setIpData: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
});

export const IpProvider = ({ children }) => {
  const [ipData, setIpData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  // console.log("Context", searchTerm);

  useEffect(() => {
    const getIpData = async () => {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_XkPvgmMu2G73WjhvSWXkxHQeeJGGy&ipAddress=${searchTerm}`
      );
      if (response) {
        // console.log(response.data);
        setIpData(response.data);
      }
    };

    getIpData();
  }, [searchTerm]);

  const value = { ipData, setIpData, searchTerm, setSearchTerm };

  return <IpContext.Provider value={value}>{children}</IpContext.Provider>;
};
