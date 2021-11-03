import data from '../data.json';
import React from 'react';
import ReactDOM from 'react-dom';

import '/style/style.css';
import {Navbar} from './navbar.js';
import {Sidebar} from './sidebar.js';
import {Presentation} from './presentation.js';
import {Experience} from './experience.js';
import {Formation} from './formation.js';
import {Loisirs} from './loisirs.js';

const App = () => {
    return (
    <>
        <Navbar user={data.profil}/>

        <div className="rest_of_page">

            <Sidebar info={data.profil}
                     qualite={data.qualites}
                     langue={data.langues}
            />

            <div className="right_part">

                <Presentation presentation={data.presentation}/>

                <Experience />

                <Formation formation={data.formations}/>

                <Loisirs loisirnum={data.loisirs_num}
                        loisirnotnum={data.loisirs_not_num}
                />

            </div>
        </div>
    </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));