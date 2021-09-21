import { Input, Modal, Spin } from 'antd';
import React from 'react';
import WBNB from "../../../../app/abis/WBNB.json";
import useCheckAddressToken from '../../../../hooks/swap/useCheckAddressToken';
import { Token } from '../../../../types/types';
import { InputAddressTokenWrap } from '../styled';
import TokenChecker from './TokenChecker';

interface Props {
    visible: boolean;
    showModal: (visible: boolean) => void;
    web3: any;
    onSetToken: (token: Token) => void;
}

function ModalToken(props: Props) {
    const [onCheck, resCheckAddress, loading] = useCheckAddressToken();

    const handleChangeAddress = (event: any) => {
        try {
            const { value } = event.target;
            const commonContract = new props.web3.eth.Contract(
                WBNB.ABI,
                value
            );
            onCheck(commonContract, value)
        } catch (error) {

        }
    }

    const onSelect = () => {
        if (resCheckAddress) {
            props.onSetToken(resCheckAddress);
            props.showModal(false);
        }
    }

    return (
        <Modal title={<h4>Select a Token</h4>} visible={props.visible} onCancel={() => props.showModal(false)} footer={""}>
            <InputAddressTokenWrap>
                <Input placeholder="Paste Address" onChange={handleChangeAddress} />
            </InputAddressTokenWrap>
            {loading && <div className="text-center mt-2"><Spin /></div>}
            {resCheckAddress ? <div className="mt-3">
                <TokenChecker onSelect={onSelect} token={resCheckAddress} />
            </div> : <div className="mt-3 text-center">No results found.</div>}

        </Modal>
    )
}

export default ModalToken
