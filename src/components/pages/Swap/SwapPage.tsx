import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import PANCAKE_ROUTER from "../../../app/abis/pancakeRouter.json";
import { BUSD_ADDRESS, WBNB_ADDRESS } from '../../../app/address';
import { fromWei } from '../../../app/utils/wei';
import useGetAmountOut from '../../../hooks/swap/useGetAmountOut';
import useConnect from '../../../hooks/useConnect';
import useSwapTokensForTokens from '../../../hooks/useSwapTokensForTokens';
import { Setting, Token } from '../../../types/types';
import Action from './components/Action';
import Arrow from './components/Arrow';
import Head from './components/Head';
import SwapInput from './components/SwapInput';
import SwapOutput from './components/SwapOutput';
import { SwapWrap } from './styled';

function SwapPage() {
    const [onSwapTokensForTokens, resSwap, loadingSwap] = useSwapTokensForTokens();

    const [swapBy, setSwapBy] = useState<string>(WBNB_ADDRESS);

    const [banlance, setBalance] = useState<string>("");

    const [setting, setSetting] = useState<Setting>();

    const [token, setToken] = useState<Token>()

    const [onConnectWallet, web3] = useConnect();

    useEffect(() => {
        onConnectWallet();
    }, [])

    useEffect(() => {
        if (web3) {
            loadBlockChainData();
        }
    }, [web3])

    const loadBlockChainData = async () => {
        const getAccounts = await web3.eth.getAccounts();
        const account = getAccounts[0];
        setSetting({
            account,
            slippage: 0.1,
            gasPrice: 5
        });
        const balance = await web3.eth.getBalance(account);
        setBalance(fromWei(balance));
    }

    const onSetToken = (token: Token) => {
        setToken(token);
    }

    const handleSetting = (gasPrice: number, slippage: number) => {
        setSetting({
            ...setting,
            gasPrice,
            slippage
        })
    }
    const [onGetAmountOut, resAmountOut, loadingAmount] = useGetAmountOut();

    const checkAmoutOut = async (value: number) => {
        try {
            if (token) {
                const pancakekRouterContract = new web3.eth.Contract(
                    PANCAKE_ROUTER.ABI,
                    PANCAKE_ROUTER.ADDRESS
                );
                onGetAmountOut(pancakekRouterContract, value, [swapBy, token.address]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (resAmountOut) {
            checkAmoutOut(resAmountOut[0]);
        }
    }, [swapBy])

    useEffect(() => {
        if (resSwap) {
            switch (resSwap.status) {
                case 200:
                    message.success({
                        content: resSwap.message,
                        className: 'mt-5',
                    });
                    break;
                case 400:
                    message.error({
                        content: resSwap.message,
                        className: 'mt-5',
                    });
                    break;
                default:
                    break;
            }
        }
    }, [resSwap])

    const handleSwap = () => {
        const routerContract = new web3.eth.Contract(
            PANCAKE_ROUTER.ABI,
            PANCAKE_ROUTER.ADDRESS
        );

        if (resAmountOut && setting && setting.account && setting.gasPrice && setting.slippage && token) {
            const perSlippage = setting.slippage;
            const gasPrice = setting.gasPrice;
            const account = setting.account
            const gasLimit = 200000;
            const price = 0;
            const amountIn = resAmountOut[0];
            if (swapBy === WBNB_ADDRESS) {
                const pair = [WBNB_ADDRESS, token.address];
                onSwapTokensForTokens({
                    routerContract, pair, amountIn, perSlippage, gasPrice, gasLimit, price, account
                }, "BNB");
            } if (swapBy === BUSD_ADDRESS) {
                const pair = [BUSD_ADDRESS, token.address];
                onSwapTokensForTokens({
                    routerContract, pair, amountIn, perSlippage, gasPrice, gasLimit, price, account
                }, "BUSD");
            }
        }
    }

    return (
        <>
            <div id="swap-page" className="row justify-content-md-center">
                <SwapWrap className="col-5">
                    <Head handleSetting={handleSetting} banlance={banlance} />
                    <SwapInput setSwapBy={setSwapBy} checkAmoutOut={checkAmoutOut} />
                    <Arrow loading={loadingAmount} />
                    <SwapOutput resAmountOut={resAmountOut} token={token} onSetToken={onSetToken} web3={web3} />
                    <Action loading={loadingSwap} handleSwap={handleSwap} web3={web3} onConnectWallet={onConnectWallet} />
                </SwapWrap>
            </div>
        </>
    )
}

export default SwapPage
