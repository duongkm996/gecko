import { Button } from "antd";
import styled from "styled-components";

export const SwapWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: inherit;
  background: rgb(255, 255, 255);
  border-radius: 24px;
  border: 1px solid rgb(231, 227, 235);
  padding-bottom: 20px;
  h4 {
    color: rgb(40, 13, 95);
    font-weight: 600;
  }
  .setting {
    cursor: pointer;
  }
  .head {
    border-bottom: 1px solid rgb(231, 227, 235);
  }
  .swap-currency-input,
  .swap-currency-output {
    background-color: #eeeaf4;
    padding: 10px;
    border-radius: 10px;
  }
`;

export const BtnSpeedWrap = styled(Button)`
  color: rgb(31, 199, 212);
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  line-height: 0.5;
  &:focus {
    background-color: rgb(31, 199, 212);
    color: white;
  }
`;

export const InputNumberWrap = styled.div`
  .ant-input-number-handler-wrap {
    display: none;
  }
  .ant-input-number {
    border: none;
    background-color: unset;
    outline: none;
    width: 80%;
    &:focus {
      box-shadow: none;
    }
  }
  .ant-input-number-focused {
    box-shadow: none;
  }
  input {
    padding: 0px;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const SelectTokenWrap = styled.div`
  .ant-select-selector {
    background-color: unset !important;
    border: none !important;
    box-shadow: none;
  }
  .ant-select-focused {
    border: none !important;
    box-shadow: none;
  }
  .ant-select-selection-item {
    font-weight: 600;
    font-size: 16px;
    color: rgb(40, 13, 95);
  }
`;

export const DivSelect = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: rgb(40, 13, 95);
  cursor: pointer;
`;

export const TokenWrap = styled.div`
  cursor: pointer;
  padding: 10px;
  &:hover {
    background: #eee;
  }
`;
