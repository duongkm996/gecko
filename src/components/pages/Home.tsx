import React from 'react'
import ListCoin from '../ListCoin'
import HomeTitle from '../title/HomeTitle'
import Trending from '../trending'

function Home() {
    return (
        <div>
            <HomeTitle />
            <ListCoin />
            <Trending />
        </div>
    )
}

export default Home
