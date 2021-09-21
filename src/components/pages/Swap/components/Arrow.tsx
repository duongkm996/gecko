import { ArrowDownOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React from 'react'

interface Props {
    loading: boolean;
}

function Arrow(props: Props) {
    return (
        <div className="justify-content-center mt-1 d-flex" style={{ height: 40, lineHeight: "40px" }}>
            {props.loading ? <div><Spin /></div> : <div>
                <ArrowDownOutlined />
            </div>}
        </div>
    )
}

export default Arrow
