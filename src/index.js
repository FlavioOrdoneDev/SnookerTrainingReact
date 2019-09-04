import React from 'react';
import ReactDOM from 'react-dom';
import { firebase } from './firebase';

// import './Resources/css/app.css';

import { BrowserRouter } from 'react-router-dom';
import Rotas from './rotas';
import './firebase';

const App = (props) => {
    return (
        <BrowserRouter>
            <Rotas {...props}/>
        </BrowserRouter>
    )
}

firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(<App user={user} />, document.getElementById('root'));
})

