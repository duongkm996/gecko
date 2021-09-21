import { Card, message } from 'antd';
import React, { useEffect, useState } from 'react';
import PANCAKE_ROUTER from "../app/abis/pancakeRouter.json";
import { BUSD_ADDRESS, WBNB_ADDRESS } from '../app/address';
import { fromWei } from '../app/utils/wei';
import useConnect from '../hooks/useConnect';
import useSwapTokensForTokens from '../hooks/useSwapTokensForTokens';
import { FormParams } from '../types/types';
import FormSwap from './FormSwap';

interface Props {

}

function BuySwap(props: Props) {
    const [onConnectWallet, web3] = useConnect();

    const [banlance, setBalance] = useState<string>("");
    const [account, setAccount] = useState<string>("");

    const loadBlockChainData = async () => {
        const getAccounts = await web3.eth.getAccounts();
        const account = getAccounts[0];
        setAccount(account);
        const balance = await web3.eth.getBalance(account);
        setBalance(fromWei(balance));
    }

    useEffect(() => {
        onConnectWallet();
    }, [])

    useEffect(() => {
        if (web3) {
            loadBlockChainData();
        }
    }, [web3])

    const [onSwapTokensForTokens, resSwap, loading] = useSwapTokensForTokens();

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

    const handleSwap = (params: FormParams) => {
        const routerContract = new web3.eth.Contract(
            PANCAKE_ROUTER.ABI,
            PANCAKE_ROUTER.ADDRESS
        );
        const { amountIn, perSlippage, gasPrice, gasLimit, swapBy, price } = params;
        if (swapBy === "BNB") {
            const pair = [WBNB_ADDRESS, params.address];
            onSwapTokensForTokens({
                routerContract, pair, amountIn, perSlippage, gasPrice, gasLimit, price, account
            }, swapBy);
        }
        if (swapBy === "BUSD") {
            const pair = [BUSD_ADDRESS, params.address];
            onSwapTokensForTokens({
                routerContract, pair, amountIn, perSlippage, gasPrice, gasLimit, price, account
            }, swapBy);
        }
    }

    return (
        <div id="content" className="mt-4">
            <Card title="Buy Token on PancakeSwap" extra={banlance && <b>Balance: {parseFloat(banlance).toFixed(4)} BNB</b>}>
                <FormSwap onConnectWallet={onConnectWallet} web3={web3} type={"BUY"} loading={loading} handleSwap={handleSwap} />
            </Card>
        </div>
    )
}

export default BuySwap
