import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const TriggerButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: yellow;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  box-shadow: seagreen 5px 5px;
  cursor: pointer;
`;

export const PopoverContainer = styled.div`
  position: absolute;
  border: 1px solid goldenrod;
  border-radius: 5px;

  background-color: yellowgreen;
  padding: 4px;
  box-shadow: seagreen 5px 5px;
`;
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;
export const Option = styled.label`
  cursor: pointer;
`;
