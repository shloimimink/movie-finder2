import React, {Fragment} from 'react';
import {GlobalStyle} from "./styles/GlobalStyle";
import {Router} from "@reach/router";

import Header from './elements/Header';
import Home from "./Home";
import Movie from "./Movie";
import NotFound from "./NotFound";


const App = () => (
    <Fragment>
        <Header/>
        <Router>
            <Home path="/"/>
            <Movie path="/:movieId"/>
            <NotFound default/>
        </Router>
        <GlobalStyle/>
    </Fragment>
);

export default App;
