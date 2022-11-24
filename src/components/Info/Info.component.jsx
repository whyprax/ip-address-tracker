import React, { useContext } from "react";
import { IpContext } from "../../context/IpData.context";
import { InfoContainer } from "./Info.styles";
import InfoComponent from "./InfoComponent.component";

const Info = () => {
  const { ipData } = useContext(IpContext);
  console.log(ipData);
  console.log(ipData?.ip);

  return (
    <InfoContainer>
      <InfoComponent title="IP ADDRESS" ip={ipData?.ip} />
      <InfoComponent title="LOCATION" location={ipData?.location?.region} />
      <InfoComponent title="TIMEZONE" timezone={ipData?.location?.timezone} />
      <InfoComponent title="ISP" isp={ipData?.isp} />
    </InfoContainer>
  );
};

export default Info;
