import React from 'react'
import { Token } from '../../../../types/types'
import { TokenWrap } from '../styled'

interface Props {
    token: Token
    onSelect: () => void;
}

function TokenChecker(props: Props) {
    return (
        <TokenWrap>
            <div onClick={props.onSelect}>
                <div><b>{props.token.symbol}</b></div>
                <div>{props.token.name}</div>
            </div>
        </TokenWrap>
    )
}

export default TokenChecker
