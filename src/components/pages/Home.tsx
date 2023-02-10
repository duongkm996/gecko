import React from 'react'
import ListCoin from '../ListCoin'
import HomeTitle from '../title/HomeTitle'
import Trending from '../trending'

function Home() {

    const arrayProduct = [
        { id: 1, point: 1 },
        { id: 3, point: 2 },
        { id: 4, point: 3 },
        { id: 4, point: 4 },
        { id: 5, point: 5 },
        { id: 5, point: 6 },
        { id: 5, point: 7 },
        { id: 5, point: 8 },
        { id: 5, point: 9 },
    ]

    var tempResult: any = {}

    for (let { id, point } of arrayProduct) {
        console.log({ id, point });
        tempResult[id] = {
            id,
            point: tempResult[id] ? point + (tempResult[id].point) : point,
            // count: tempResult[id] ? tempResult[id].count + 1 : 1
        }

    }

    let result = Object.values(tempResult)

    console.log({ result, tempResult })

    return (
        <div>
            <HomeTitle />
            <ListCoin />
            <Trending />
        </div>
    )
}

export default Home
