import React from 'react'
import SpanPrice from '../../commons/SpanPrice';
import { MarketStatWrap } from './styled';

interface Props {
    resDetail: any;
}

function MarketStat(props: Props) {
    const { resDetail } = props;

    return (
        <div className="col-5">
            <MarketStatWrap className="market_stats">
                <h4 className="text-center">{resDetail.symbol.toUpperCase()} Market Stats</h4>
                <div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th><span>{resDetail.name} Price</span></th>
                                <td><b><SpanPrice price={resDetail.market_data.current_price.usd} /></b></td>
                            </tr>
                            {
                                resDetail.market_data.roi && <tr>
                                    <th><span>{resDetail.name} ROI</span></th>
                                    <td><span className="green">{resDetail.market_data.roi.percentage.toFixed(0)}%</span></td>
                                </tr>
                            }
                            <tr>
                                <th><span>Market Cap</span></th>
                                <td><b><SpanPrice price={resDetail.market_data.market_cap.usd} /></b></td>
                            </tr>
                            <tr>
                                <th><span>Trading Volume</span></th>
                                <td><b><SpanPrice price={resDetail.market_data.total_volume.usd} /></b></td>
                            </tr>
                            <tr>
                                <th><span>24h Low / 24h High</span></th>
                                <td><b>${resDetail.market_data.low_24h.usd} / ${resDetail.market_data.high_24h.usd}</b></td>
                            </tr>
                            <tr>
                                <th><span>Market Cap Rank</span></th>
                                <td><b>#{resDetail.market_cap_rank}</b></td>
                            </tr>
                            <tr>
                                <th><span>All-Time High</span></th>
                                <td><b><SpanPrice price={resDetail.market_data.ath.usd} /></b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </MarketStatWrap>
        </div>
    )
}

export default MarketStat
