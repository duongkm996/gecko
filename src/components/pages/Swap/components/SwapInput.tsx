import { InputNumber, Select } from 'antd';
import React from 'react';
import { BUSD_ADDRESS, WBNB_ADDRESS } from '../../../../app/address';
import { InputNumberWrap, SelectTokenWrap } from '../styled';

const listSwapBy = [
    {
        symbol: "BNB",
        address: WBNB_ADDRESS
    },
    {
        symbol: "BUSD",
        address: BUSD_ADDRESS
    }
];

interface Props {
    checkAmoutOut: (value: number) => void;
    setSwapBy: (value: string) => void;
}

function SwapInput(props: Props) {
    const deFaultSwapBy = listSwapBy[0].address;

    return (
        <div className="swap-currency-input mt-3">
            <div className="mb-2"><small>From</small></div>
            <div className="d-flex">
                <InputNumberWrap>
                    <InputNumber
                        min={0}
                        placeholder={"0.0"}
                        max={1000000000}
                        onChange={(value) => props.checkAmoutOut(value)}
                    />
                </InputNumberWrap>
                <SelectTokenWrap className="ml-auto">
                    <Select defaultValue={deFaultSwapBy} onChange={(value) => props.setSwapBy(value)}>
                        {listSwapBy.map((item, index) => <Select.Option key={index} value={item.address}>{item.symbol}</Select.Option>)}
                    </Select>
                </SelectTokenWrap>
            </div>
        </div>
    )
}

export default SwapInput
