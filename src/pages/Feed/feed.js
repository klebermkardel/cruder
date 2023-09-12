import React from 'react';

import HeaderMain from '../../components/HeaderMain/HeaderMain';

import './feed.css'

import More from '../../images/more.svg';

function Feed() {
    return(
        <div>
            <HeaderMain />
            <main>
                <div className="cards">
                    <div className="card">
                        <header>
                            <h2>Curso Consumindo API</h2>
                            <img src={More} />
                        </header>
                        <div className="line"></div>
                        <p>Nesse curso eu ensino vcs a consumirem uma api, com react.js, uma api feita em node js e mongoDB</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Feed