import React, { useEffect, useState } from 'react';
// @ts-ignore
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import useListCoin from '../../hooks/useListCoin';
import { RootState } from '../../store';
import { PaginateWrap, TableWrap } from './styled';
import TableCoin from './TableCoin';

function ListCoin() {
    const resGlobal = useSelector((state: RootState) => state.global)

    const [listReq, setListReq] = useState<any>({
        page: 1,
        per_page: 100
    })

    const [onGetList, resList, loading] = useListCoin();

    const history = useHistory();

    useEffect(() => {
        onGetList(listReq);
    }, [listReq])


    const handleMoveDetail = (id: string) => {
        history.push(`/coins/${id}`)
    }

    const getPageCount = () => {
        if (resGlobal && Object.keys(resGlobal).length > 0) {
            return resGlobal.active_cryptocurrencies / 100
        }
        return 1;
    }

    const onPageChange = (params: any) => {
        setListReq({
            ...listReq,
            page: params.selected + 1
        })
    }

    return (
        <TableWrap>
            <TableCoin handleMoveDetail={handleMoveDetail} resList={resList} loading={loading} />
            <PaginateWrap>
                <ReactPaginate activeClassName={'active'} onPageChange={onPageChange} pageCount={getPageCount()} pageRangeDisplayed={3} marginPagesDisplayed={3} />
            </PaginateWrap>
        </TableWrap>
    )
}

export default ListCoin
