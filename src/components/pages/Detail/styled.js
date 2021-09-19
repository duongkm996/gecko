import styled from "styled-components";

export const MarketStatWrap = styled.div`
  background-color: #f3f4f6;
  padding: 10px;
  border-radius: 5px;
  tr {
    td,
    th {
      font-size: 14px;
    }
    th {
      font-weight: normal;
      span {
        color: rgba(107, 114, 128, var(--tw-text-opacity));
      }
    }
  }
`;
