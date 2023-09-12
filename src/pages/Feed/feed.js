import React from 'react';

import { Link } from 'react-router-dom';

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
                        <div className="btns">
                            <div className="btn-edit">
                                <Link to="/edit">
                                    <button>Editar</button>
                                </Link>
                            </div>
                            <div className="btn-readmore">
                                <Link to="/lermais">
                                    <button>Ler Mais</button>
                                </Link>
                            </div>
                            <div className="btn-delete">
                                <button>Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Feed