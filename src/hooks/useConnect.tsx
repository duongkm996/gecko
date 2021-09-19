import React, { useState } from 'react'
import Web3 from "web3";

declare global {
    interface Window {
        ethereum: any;
        web3: any;
    }
}

function useConnect() {
    const [web3, setWeb3] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const onConnectWallet = async () => {
        setLoading(true);
        try {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                setWeb3(window.web3)
            } else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider);
                setWeb3(window.web3)
            } else {
                window.alert(
                    "Non-Ethereum browser detected. You should consider trying MetaMask!"
                );
            }
        } catch (error) {

        }
        setLoading(false);
    }

    return [onConnectWallet, web3, loading];
}

export default useConnect
