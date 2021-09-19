import React from 'react'

interface Props {
    percent: any;
}

function SpanPercent(props: Props) {
    return (
        <span className={props.percent > 0 ? 'green' : 'red'}>
            {props.percent && props.percent.toFixed(2)}%
        </span>
    )
}

export default SpanPercent
