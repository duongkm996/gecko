import React, { useEffect } from 'react'
import useGetTrending from '../../hooks/useGetTrending'
import { TrendingWrap } from './styled';
import { useHistory } from 'react-router';

function Trending() {
    const history = useHistory();

    const [onGetTrending, resTrending, loading] = useGetTrending();

    useEffect(() => {
        onGetTrending();
    }, [])

    const handleMoveDetail = (id: string) => {
        history.push(`/coins/${id}`)
    }

    const renderContent = () => {
        if (resTrending) {
            const list = resTrending.map((element, index) => {
                const { item } = element;
                if (index < 4)
                    return <div className="col-3" key={item.id}>
                        <TrendingWrap className="d-flex">
                            <div className="mr-2">
                                <img src={item.thumb} alt={item.name} />
                            </div>
                            <div>
                                <a onClick={() => handleMoveDetail(item.id)}>{item.name}</a>
                            </div>
                        </TrendingWrap>
                    </div>
            })
            return list;
        }
    }

    return (
        <div className="row mt-3 pb-3">
            <div className="col-12 mb-2">
                <h4>Trending Coins</h4>
            </div>
            {renderContent()}
        </div>
    )
}

export default Trending
