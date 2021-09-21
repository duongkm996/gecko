import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function MiddleHeader() {
    const resGlobal = useSelector((state: RootState) => state.global)

    const renderContent = () => {
        if (resGlobal && Object.keys(resGlobal).length > 0) {
            const list = Object.entries(resGlobal.market_cap_percentage).map((item, index) => {
                if (index < 8) {
                    return <div className="mr-4" key={index}><span className="title">{item[0].toUpperCase()} {item[1].toFixed(1)}%</span></div>
                }
            })
            return (<>
                <div className="mr-3"><span className="font-bold">Dominance</span>: </div>
                {list}
            </>);
        }
    }

    const renderTotalCoins = () => {
        if (resGlobal && Object.keys(resGlobal).length > 0) {
            return <div className="mr-3"><span className="font-bold">Coins: </span> <span className="title">{resGlobal.active_cryptocurrencies}</span></div>
        }
    }

    return (
        <div className="mid-header d-flex">
            {renderTotalCoins()}
            {renderContent()}
        </div>
    )
}

export default MiddleHeader
