import React from 'react'
import { Modal, Button, Input } from 'antd';
import { Token } from '../../../../types/types';
import TokenChecker from './TokenChecker';

interface Props {
    visible: boolean;
    showModal: (visible: boolean) => void;
    checkToken: (address: string) => void;
    token: Token | undefined
}

function ModalToken(props: Props) {
    const handleChangeAddress = (event: any) => {
        const { value } = event.target;
        props.checkToken(value);
    }

    const onSelect = () => {
        props.showModal(false);
    }

    return (
        <Modal title="Select a Token" visible={props.visible} onCancel={() => props.showModal(false)}>
            <div>
                <Input placeholder="Paste Address" onChange={handleChangeAddress} />
            </div>
            {props.token ? <div className="mt-3">
                <TokenChecker onSelect={onSelect} token={props.token} />
            </div> : <div className="mt-3 text-center">No results found.</div>}

        </Modal>
    )
}

export default ModalToken
