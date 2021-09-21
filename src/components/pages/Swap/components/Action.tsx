import { Button } from 'antd'
import React from 'react'

interface Props {
    onConnectWallet: () => void;
    web3: any;
    handleSwap: () => void;
    loading: boolean;
}

function Action(props: Props) {
    return (
        <div className="mt-3">
            {props.web3 ? <Button loading={props.loading} onClick={() => props.handleSwap()} style={{ width: "100%" }} type="primary">Swap</Button> : <Button onClick={() => props.onConnectWallet()} style={{ width: "100%" }} type="primary" danger>Connect Metamask</Button>}
        </div>
    )
}

export default Action
