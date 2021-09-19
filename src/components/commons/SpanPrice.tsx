import React from 'react'

interface Props {
    price: number;
    noSymbol?: boolean;
}

function SpanPrice(props: Props) {
    return (
        <span>{props.noSymbol ? "" : "$"}{props.price && props.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
    )
}


export default SpanPrice
