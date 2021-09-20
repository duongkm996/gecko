import React from 'react'
import { useHistory } from 'react-router';

function MainHeader() {
    const history = useHistory();

    const redirectPancake = () => {
        history.push('/swap/pancake')
    }

    return (
        <div>
            <div className="main-header">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" onClick={() => history.push('/')}>
                        <img width="150" src="https://static.coingecko.com/s/coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <a className="nav-link" onClick={() => history.push('/')}>Coins</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => redirectPancake()}>PancakeSwap</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default MainHeader
