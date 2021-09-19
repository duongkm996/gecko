import axios from 'axios';
import React, { useState } from 'react'
import { ItemTrending } from '../types/types';

function useGetTrending(): [() => void, ItemTrending[] | undefined, boolean] {
    const [resTrending, setResTrending] = useState<ItemTrending[]>();
    const [loading, setLoading] = useState<boolean>(false);

    const onGetTrending = async () => {
        setLoading(true);
        try {
            const result: any = await axios.get(`http://localhost:5000/api/coins/trending`, {
                headers: {
                    Accept: "application/json",
                }
            });
            const resultData = result.data;
            if (resultData.status === 200) {
                setResTrending(resultData.result);
            }
        } catch (error) {

        }
        setLoading(false);
    }

    return [onGetTrending, resTrending, loading];
}

export default useGetTrending
