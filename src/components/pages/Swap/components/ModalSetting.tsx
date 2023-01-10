import React, { useRef, useState } from 'react'
import { Modal, Button, InputNumber } from 'antd';
import { BtnSpeedWrap, InputNumberRadius } from '../styled';

interface Props {
    visible: boolean;
    showModal: (visible: boolean) => void;
    handleSetting: (gasPrice: number, slippage: number) => void;
}

const listTxSpeed = [
    {
        value: 5,
        title: "Standard (5)"
    },
    {
        value: 6,
        title: "Fast (6)"
    },
    {
        value: 7,
        title: "Instant (7)"
    },
]

function ModalSetting(props: Props) {
    const [activeSpeed, setActiveSpeed] = useState<number>(5);

    const refSlip = useRef<any>();

    const onCheckSpeed = (value: number) => {
        setActiveSpeed(value);
        props.handleSetting(value, refSlip.current.value);
    }

    const onChangeSlip = (value: any) => {
        props.handleSetting(activeSpeed, value);
    }

    return (
        <Modal title={<h4>Settings</h4>} visible={props.visible} onCancel={() => props.showModal(false)} footer={""}>
            <div className="tx-speed">
                <div>
                    <b>Default Transaction Speed (GWEI)</b>
                </div>
                <BtnSpeedWrap className="mt-3">
                    {listTxSpeed.map((item, index) => <Button onClick={() => onCheckSpeed(item.value)} value={item.value} className={`mr-2 ${activeSpeed === item.value ? 'active' : ""}`} key={index}>{item.title}</Button>)}
                </BtnSpeedWrap>
            </div>
            <div className="slip mt-4">
                <div>
                    <b>Slippage Tolerance (%)</b>
                </div>
                <InputNumberRadius className="mt-3">
                    <InputNumber
                        defaultValue={0.1}
                        min={0.1}
                        max={100}
                        ref={refSlip}
                        onChange={onChangeSlip}
                    />
                </InputNumberRadius>
            </div>
        </Modal>
    )
}

export default ModalSetting
