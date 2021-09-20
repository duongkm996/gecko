import React, { useState, useEffect } from 'react';
import {
    ArrowDownOutlined, SettingFilled
} from '@ant-design/icons';
import { InputNumber, Select, Button } from 'antd';
import useConnect from '../../../hooks/useConnect';
import ModalSetting from './components/ModalSetting';
import ModalToken from './components/ModalToken';
import { DivSelect, InputNumberWrap, SelectTokenWrap, SwapWrap } from './styled';
import WBNB from "../../../app/abis/WBNB.json";
import { Token } from '../../../types/types';

const { Option } = Select

function SwapPage() {
    const [onConnectWallet, web3] = useConnect();

    const [token, setToken] = useState<Token>()

    useEffect(() => {
        onConnectWallet();
    }, [])

    const [isSettingVisible, setIsSettingVisible] = useState<boolean>(false);
    const showModalSetting = (visible: boolean) => {
        setIsSettingVisible(visible);
    };

    const [isTokenVisible, setIsTokenVisible] = useState<boolean>(false);
    const showModalToken = (visible: boolean) => {
        setIsTokenVisible(visible);
    };

    const checkToken = async (address: string) => {
        try {
            const commonContract = new web3.eth.Contract(
                WBNB.ABI,
                address
            );;
            const name = await commonContract.methods.name().call();
            const symbol = await commonContract.methods.symbol().call();
            setToken({
                name,
                symbol
            })
        } catch (error) {
            setToken(undefined);
        }
    }

    return (
        <>
            <div id="swap-page" className="row justify-content-md-center">
                <SwapWrap className="col-5">
                    <div className="head d-flex pt-4">
                        <div>
                            <h4>PancakeSwap</h4>
                            <p><small>Trade tokens in an instant</small></p>
                        </div>
                        <div className="ml-auto align-self-center">
                            <span className="setting" onClick={() => showModalSetting(true)}><SettingFilled /></span>
                        </div>
                    </div>
                    <div className="swap-currency-input mt-3">
                        <div className="mb-2"><small>From</small></div>
                        <div className="d-flex">
                            <InputNumberWrap>
                                <InputNumber
                                    min={0}
                                    max={100}
                                    placeholder={"0.0"}
                                />
                            </InputNumberWrap>
                            <SelectTokenWrap className="ml-auto">
                                <Select defaultValue="BNB" >
                                    <Option value="BNB">BNB</Option>
                                    <Option value="BUSD">BUSD</Option>
                                </Select>
                            </SelectTokenWrap>
                        </div>
                    </div>
                    <div className="text-center mt-1">
                        <ArrowDownOutlined />
                    </div>
                    <div className="swap-currency-output mt-3">
                        <div className="mb-2"><small>To</small></div>
                        <div className="d-flex">
                            <InputNumberWrap>
                                <InputNumber
                                    min={0}
                                    max={100}
                                    placeholder={"0.0"}
                                />
                            </InputNumberWrap>
                            <DivSelect className="ml-auto">
                                <div onClick={() => showModalToken(true)}>
                                    <div className="mr-3">{token ? token.symbol : "Select a currency"}</div>
                                </div>
                            </DivSelect>
                        </div>
                    </div>
                    <div className="mt-3">
                        {web3 ? <Button onClick={() => onConnectWallet()} style={{ width: "100%" }} type="primary">Swap</Button> : <Button onClick={() => onConnectWallet()} style={{ width: "100%" }} type="primary" danger>Connect Metamask</Button>}
                    </div>
                </SwapWrap>
            </div>
            <ModalSetting showModal={showModalSetting} visible={isSettingVisible} />
            <ModalToken token={token} checkToken={checkToken} showModal={showModalToken} visible={isTokenVisible} />
        </>
    )
}

export default SwapPage
