import { Spin, Table } from 'antd';
import React from 'react';
//@ts-ignore
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Coin } from '../../types/types';
import SpanPercent from '../commons/SpanPercent';
import SpanPrice from '../commons/SpanPrice';

interface Props {
    resList: Coin[] | undefined;
    handleMoveDetail: (id: string) => void;
    loading: boolean;
}

function TableCoin(props: Props) {
    const columns = [
        {
            title: '#',
            key: 'market_cap_rank',
            dataIndex: 'market_cap_rank',
        },
        {
            title: 'Coin',
            dataIndex: 'desc',
            key: 'desc',
            render: (desc: any) => <div className="d-flex">
                <div className="mr-2"><img width={20} src={desc.image} alt="" /></div>
                <div className="mr-2"><a onClick={() => props.handleMoveDetail(desc.id)}><b>{desc.name}</b></a></div>
                <div>{desc.symbol.toUpperCase()}</div>
            </div >,
        },
        {
            title: 'Price',
            key: 'current_price',
            dataIndex: 'current_price',
            render: (price: number) => <SpanPrice price={price} />,
        },
        {
            title: '1h',
            key: 'price_change_percentage_1h_in_currency',
            dataIndex: 'price_change_percentage_1h_in_currency',
            render: (percent: number) => <SpanPercent percent={percent} />,
        },
        {
            title: '24h',
            key: 'price_change_percentage_24h_in_currency',
            dataIndex: 'price_change_percentage_24h_in_currency',
            render: (percent: number) => <SpanPercent percent={percent} />,
        },
        {
            title: '7d',
            key: 'price_change_percentage_7d_in_currency',
            dataIndex: 'price_change_percentage_7d_in_currency',
            render: (percent: number) => <SpanPercent percent={percent} />,
        },
        {
            title: '24h Volume',
            key: 'total_volume',
            dataIndex: 'total_volume',
            render: (price: number) => <SpanPrice price={price} />,
        },
        {
            title: 'Market Cap',
            key: 'market_cap',
            dataIndex: 'market_cap',
            render: (price: number) => <SpanPrice price={price} />,
        },
        {
            title: 'Last 7 Days',
            key: 'sparkline_in_7d',
            dataIndex: 'sparkline_in_7d',
            render: (value: any) => {
                if (value.price && value.price.length) {
                    const arrayPrice: number[] = value.price;
                    let color: string = "";
                    if (arrayPrice[0] < arrayPrice[arrayPrice.length - 1]) {
                        color = "green";
                    } else {
                        color = "red";
                    }
                    return <Sparklines data={value.price}>
                        <SparklinesLine color={color} />
                    </Sparklines>
                }
            }
        },
    ];

    return (
        <div>
            <Table loading={props.loading} pagination={false} columns={columns} dataSource={props.resList} />
        </div>
    )
}

export default TableCoin
