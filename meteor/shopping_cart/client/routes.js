import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

/**
* Pages App, Products and PageNotFound
*/
import App from './containers/App';
import Products from  './containers/Products';

import PageNotFound from  './components/PageNotFoundComponent';

/**
* Three containers Cart, Books and Music
*
*/
import CartContainer from  './containers/CartContainer';
import BooksContainer from  './containers/BooksContainer';
import MusicContainer from  './containers/MusicContainer';



export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/cart" component={CartContainer}/>
            <Route path="products" component={Products}>
                <Route path="books" component={BooksContainer}/>
                <Route path="music" component={MusicContainer}/>
            </Route>
        </Route>
        <Route path="*" component={PageNotFound} />
    </Router>
);