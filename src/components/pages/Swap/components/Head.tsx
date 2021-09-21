import { SettingFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import ModalSetting from './ModalSetting';

interface Props {
    banlance: any;
    handleSetting: (gasPrice: number, slippage: number) => void;
}

function Head(props: Props) {
    const [isSettingVisible, setIsSettingVisible] = useState<boolean>(false);

    const showModalSetting = (visible: boolean) => {
        setIsSettingVisible(visible);
    };

    return (
        <>
            <div className="head d-flex pt-4">
                <div>
                    <h4>PancakeSwap</h4>
                    <p><small>BNB: {props.banlance && parseFloat(props.banlance).toFixed(4)}</small></p>
                </div>
                <div className="ml-auto align-self-center">
                    <span className="setting" onClick={() => showModalSetting(true)}><SettingFilled /></span>
                </div>
            </div>

            <ModalSetting handleSetting={props.handleSetting} showModal={showModalSetting} visible={isSettingVisible} />
        </>
    )
}

export default Head
