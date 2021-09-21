import { InputNumber } from 'antd'
import React, { useState } from 'react'
import { Token } from '../../../../types/types'
import { DivSelect, InputNumberWrap } from '../styled'
import ModalToken from './ModalToken';

interface Props {
    resAmountOut: number[] | undefined;
    token: Token | undefined;
    onSetToken: (token: Token) => void;
}

function SwapOutput(props: Props) {
    const [isTokenVisible, setIsTokenVisible] = useState<boolean>(false);

    const showModalToken = (visible: boolean) => {
        setIsTokenVisible(visible);
    };

    return (
        <div>
            <div className="swap-currency-output mt-3">
                <div className="mb-2"><small>To</small></div>
                <div className="d-flex">
                    <InputNumberWrap>
                        <InputNumber
                            min={0}
                            placeholder={"0.0"}
                            value={props.resAmountOut && props.resAmountOut[1]}
                        />
                    </InputNumberWrap>
                    <DivSelect className="ml-auto">
                        <div onClick={() => showModalToken(true)}>
                            <div className="mr-3">{props.token ? props.token.symbol : "Select a currency"}</div>
                        </div>
                    </DivSelect>
                </div>
            </div>
            <ModalToken onSetToken={props.onSetToken} showModal={showModalToken} visible={isTokenVisible} />
        </div>
    )
}

export default SwapOutput
