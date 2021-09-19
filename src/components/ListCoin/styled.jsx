import styled from "styled-components";

export const TableWrap = styled.div`
    a {
        color: black;
    }
    .ant-table-cell {
        background: none;
        &::before {
            display: none;
        }
    }
`;

export const PaginateWrap = styled.div`
    margin-top: 20px;
    ul li{
        display: inline-block;
        a {
            display: block;
            border-right: 1px solid #e7e7e7;
            border-top: 1px solid #e7e7e7;
            border-bottom: 1px solid #e7e7e7;
            color: inherit;
            cursor: pointer;
            z-index: 2;
            padding: 7px 14px;
            font-size: 12px;
        }
    }
    .previous {
            a {
                border-left: 1px solid #e7e7e7;
            }
        }
    text-align: center;
    .active {
        background: #eee;
    }
`
