import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
//import App from './containers/App';
import { renderRoutes } from './routes';

Meteor.startup(() => {
    //render(<App />, document.getElementById('root'));
    render(renderRoutes(), document.getElementById('root'));
});
