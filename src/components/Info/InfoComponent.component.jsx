import React from "react";
import { Content, InfoComponentContainer } from "./Info.styles";

const InfoComponent = ({ title, ip, location, timezone, isp }) => {
  return (
    <InfoComponentContainer>
      <h5>{title}</h5>
      <Content>{ip}</Content>
      <Content>{location}</Content>
      <Content>{timezone}</Content>
      <Content>{isp}</Content>
    </InfoComponentContainer>
  );
};

export default InfoComponent;
