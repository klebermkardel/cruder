import React from 'react';

import { Link } from 'react-router-dom';

function HeaderMain() {
    return (
        <header>
            <div className="content">
                <div className="logo">
                    <h1>CRUder</h1>
                </div>
                <div className="btn-newPost">
                    <Link to="/Post/post">
                        <button>Novo Post</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderMain;