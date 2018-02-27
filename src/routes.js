import React from 'react';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';

import Header from './header.js';
import Article from './article.js';

export default class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Article />
        </div>
      </BrowserRouter>
    );
  }
}
