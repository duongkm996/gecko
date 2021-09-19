import axios from 'axios';
import React, { useState } from 'react'
import { Coin } from '../types/types';

interface ListReq {
    page: number;
    per_page: number;
}

function useListCoin(): [(req: ListReq) => void, any, boolean] {
    const [resList, setResList] = useState<Coin[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const onGetList = async (req: ListReq) => {
        try {
            setLoading(true);
            const result: any = await axios.get('http://207.148.127.143/api/coins/markets', {
                headers: {
                    Accept: "application/json",
                },
                params: {
                    page: req.page,
                    per_page: req.per_page
                }
            });
            const resultData = result.data;
            if (resultData.status === 200) {
                resultData.result.forEach((item: any) => {
                    item.key = item.id;
                    item.desc = {
                        symbol: item.symbol,
                        name: item.name,
                        image: item.image,
                        id: item.id,
                    }
                });
                setResList(resultData.result);
            }
        } catch (error) {

        }
        setLoading(false);
    }

    return [onGetList, resList, loading];
}

export default useListCoin
