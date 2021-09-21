import React from 'react'
import { useHistory } from 'react-router';
import Logo from '../../images/haederlogo.svg';

function MainHeader() {
    const history = useHistory();

    const redirectPancake = () => {
        history.push('/swap/pancake')
    }

    const redirectFlash = () => {
        history.push('/swap/flash-swap')
    }

    return (
        <div>
            <div className="main-header">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" onClick={() => history.push('/')}>
                        <img src={Logo} alt="Cryto Finance" />
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
                                <a className="nav-link" onClick={() => redirectPancake()}>Pancake Swap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => redirectFlash()}>Flash Swap</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default MainHeader
