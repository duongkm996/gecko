import React from 'react'

function MainHeader() {
    return (
        <div>
            <div className="main-header">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/">
                        <img width="150" src="https://static.coingecko.com/s/coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Coins</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/swap/pancake">PancakeSwap</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default MainHeader
