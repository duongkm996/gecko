import React from 'react'
import { Tag, Divider } from 'antd';

interface Props {
    resDetail: any;
}

function RightInfo(props: Props) {
    const { resDetail } = props;
    return (
        <div className="col-4 right">
            <h4>Info</h4>
            {/* <div className="d-flex mb-2">
                <div className="small">Community</div>
                <div className="ml-auto small">
                    <Tag color="blue"><a href={resDetail.links.official_forum_url[0]} target="_blank">{resDetail.links.official_forum_url[0]}</a></Tag>
                </div>
            </div> */}
            <div className="d-flex mb-2">
                <div className="small">Source Code</div>
                <div className="ml-auto small">
                    <Tag color="blue"><a href={resDetail.links.repos_url.github[0]} target="_blank">GIT HUB</a></Tag>
                </div>
            </div>
        </div>
    )
}

export default RightInfo
