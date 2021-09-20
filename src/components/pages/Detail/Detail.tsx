import { Breadcrumb, Spin } from 'antd';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useGetDetail from '../../../hooks/useGetDetail';
import Chart from './Chart';
import LeftInfo from './LeftInfo';
import MarketStat from './MarketStat';
import RightInfo from './RightInfo';

function Detail() {
    const [onGetDetail, resDetail, loading] = useGetDetail();

    const params: any = useParams();

    useEffect(() => {
        onGetDetail(params.coinId);
    }, [params])

    if (loading) {
        return <div className="example text-center mt-5">
            <Spin />
        </div>
    }

    return (
        <>
            {resDetail ? <div>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="">Coins</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{resDetail.name}</Breadcrumb.Item>
                </Breadcrumb>
                <div className="row">
                    <LeftInfo resDetail={resDetail} />
                    <RightInfo resDetail={resDetail} />
                </div>
                <div className="row over-view mt-5">
                    <Chart resDetail={resDetail} />
                    <MarketStat resDetail={resDetail} />
                </div>
            </div> : ""}
        </>
    )
}

export default Detail
