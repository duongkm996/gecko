import React from 'react'
//@ts-ignore
import { Sparklines, SparklinesLine } from 'react-sparklines';
import SpanPercent from '../../commons/SpanPercent';

interface Props {
    resDetail: any;
}

function Chart(props: Props) {
    const { resDetail } = props;

    return (
        <div className="col-7">
            <h4 className="mb-3">7D Chart</h4>
            <div>
                <Sparklines data={resDetail.market_data.sparkline_7d.price}>
                    <SparklinesLine color="blue" />
                </Sparklines>
            </div>
            <div className="mt-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">24h</th>
                            <th scope="col">7d</th>
                            <th scope="col">14d</th>
                            <th scope="col">30d</th>
                            <th scope="col">1y</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td><SpanPercent percent={resDetail.market_data.price_change_percentage_24h} /></td>
                        <td><SpanPercent percent={resDetail.market_data.price_change_percentage_7d} /></td>
                        <td><SpanPercent percent={resDetail.market_data.price_change_percentage_14d} /></td>
                        <td><SpanPercent percent={resDetail.market_data.price_change_percentage_30d} /></td>
                        <td><SpanPercent percent={resDetail.market_data.price_change_percentage_1y} /></td>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Chart
