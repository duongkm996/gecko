import React from 'react'
import { Modal, Button, InputNumber } from 'antd';
import { BtnSpeedWrap } from '../styled';

interface Props {
    visible: boolean;
    showModal: (visible: boolean) => void;
}

function ModalSetting(props: Props) {
    return (
        <Modal title="Settings" visible={props.visible} onCancel={() => props.showModal(false)}>
            <div className="tx-speed">
                <div>
                    <b>Default Transaction Speed (GWEI)</b>
                </div>
                <div className="mt-3">
                    <BtnSpeedWrap className="mr-2">Standard (5)</BtnSpeedWrap>
                    <BtnSpeedWrap className="mr-2">Fast (6)</BtnSpeedWrap>
                    <BtnSpeedWrap>Instant (7)</BtnSpeedWrap>
                </div>
            </div>
            <div className="slip mt-4">
                <div>
                    <b>Slippage Tolerance</b>
                </div>
                <div className="mt-3">
                    <InputNumber
                        defaultValue={0.1}
                        min={0}
                        max={100}
                        formatter={value => `${value}%`}
                        parser={(value: any) => value.replace('%', '')}
                    />
                </div>
            </div>
        </Modal>
    )
}

export default ModalSetting
