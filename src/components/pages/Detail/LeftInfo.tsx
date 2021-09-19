import React from 'react'
import { Tag, Divider } from 'antd';
import SpanPrice from '../../commons/SpanPrice';

interface Props {
    resDetail: any;
}

function LeftInfo(props: Props) {
    const { resDetail } = props;
    return (
        <div className="col-8 left">
            <div className="tag-rank mt-3">
                <Tag color="black">Rank #{resDetail.market_cap_rank}</Tag>
            </div>
            <div className="coin-name mt-3 d-flex">
                <div className="mr-2">
                    <img className="tw-rounded-full" alt="cosmos  (ATOM)" height="28" width="28" src={resDetail.image.thumb} />
                </div>
                <h4>{resDetail.name} ({resDetail.symbol.toUpperCase()})</h4>
            </div>
            <div className="mt-2 d-flex">
                <h3 className="mr-2"><SpanPrice price={resDetail.market_data.current_price.usd} /></h3>
                <h4 className={resDetail.market_data.price_change_percentage_24h > 0 ? "green" : "red"}>{resDetail.market_data.price_change_percentage_24h.toFixed(1)}%</h4>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="d-flex">
                        <div className="small">Market Cap </div>
                        <div className="ml-auto small"><b><SpanPrice price={resDetail.market_data.market_cap.usd} /></b></div>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <div className="small">24 Hour Trading Vol </div>
                        <div className="ml-auto small"><b><SpanPrice price={resDetail.market_data.total_volume.usd} /></b></div>
                    </div>
                    <hr />
                </div>
                <div className="col-6">
                    <div className="d-flex">
                        <div className="small">Circulating Supply </div>
                        <div className="ml-auto small"><b><SpanPrice price={resDetail.market_data.circulating_supply} noSymbol={true} /></b></div>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <div className="small">Total Supply </div>
                        <div className="ml-auto small">{resDetail.market_data.total_supply ? <b><SpanPrice price={resDetail.market_data.total_supply} noSymbol={true} /></b> : "∞"}</div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default LeftInfo
