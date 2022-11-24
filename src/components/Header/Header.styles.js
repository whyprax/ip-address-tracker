import styled from "styled-components";
import img from "../../images/pattern-bg.png";

export const HeaderBg = styled.div`
  width: 100%;
  height: 40vh;
  background: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;

export const SearchContainer = styled.div`
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
