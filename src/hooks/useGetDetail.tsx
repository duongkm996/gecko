import axios from 'axios';
import { useState } from 'react';

function useGetDetail(): [(id: string) => void, any | undefined, boolean] {
    const [resDetail, setResDetail] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const onGetDetail = async (id: string) => {
        setLoading(true);
        try {
            const result: any = await axios.get(`http://cryptofinance.life/api/coins/detail/${id}`, {
                headers: {
                    Accept: "application/json",
                }
            });
            const resultData = result.data;
            if (resultData.status === 200) {
                setResDetail(resultData.result);
            }
        } catch (error) {

        }
        setLoading(false);
    }

    return [onGetDetail, resDetail, loading];
}

export default useGetDetail
