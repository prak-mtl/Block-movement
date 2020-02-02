import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    position: relative;
  }
`;

export const DisplayCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
`;

/***********************************Blocks CSS *******************************************/
export const BlockOne = styled.div`
  width: 150px;
  min-height: 160px;
  text-align: center;
  color: #f000ff;
  background-color: ${props => props.block1Color};
  resize: both;
  overflow: auto;
  position: absolute;
  z-index: 9;
`;

export const BlockTwo = styled.div`
  width: 150px;
  min-height: 160px;
  text-align: center;
  color: #eaeaea;
  background-color: ${props => props.block2Color};
  resize: both;
  overflow: auto;
  position: absolute;
  left: 10%;
  z-index: 9;
`;

export const Blankdiv = styled.div`
  padding: 3px;
  cursor: move;
  z-index: 10;
  background-color: #cacaca;
  color: #505050;
`;

/***********************************Zones CSS *******************************************/
export const OuterZone = styled.div`
  width: 850px;
  height: 650px;
  text-align: center;
  color: #eaeaea;
  background-color: red;
  resize: both;
  overflow: auto;
  position: absolute;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerZone = styled.div`
  width: 450px;
  height: 400px;
  text-align: center;
  color: #eaeaea;
  background-color: green;
  cursor: move;
`;
