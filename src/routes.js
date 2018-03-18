import React from 'react';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';

import Header from './header.js';
import Articles from './articles.js';
import Article from './article.js';

export default class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Route exact path='/' component={Articles}/>
          <Route path='/entries/:id' component={Article}/>
        </div>
      </BrowserRouter>
    );
  }
}
