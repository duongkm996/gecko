import axios from 'axios';
import React, { useState } from 'react'
import { Global } from '../types/types';

function useGetGlobal(): [() => void, Global | undefined, boolean] {
    const [resGlobal, setResGlobal] = useState<Global>();
    const [loading, setLoading] = useState<boolean>(false);

    const onGetGlobal = async () => {
        try {
            const result: any = await axios.get('http://localhost:5000/api/coins/global', {
                headers: {
                    Accept: "application/json",
                }
            });
            const resultData = result.data;
            if (resultData.status === 200) {
                setResGlobal(resultData.result);
            }
        } catch (error) {

        }

    }

    return [onGetGlobal, resGlobal, loading];
}

export default useGetGlobal
