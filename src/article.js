import React from 'react';
import axios from 'axios';
import 'babel-polyfill';

export default class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      article: '',
    };

    this.getEntry = this.getEntry.bind(this);
  }

  componentWillMount() {
    this.getEntry();
  }

  getEntry() {
    axios.get('/api/entry/1').then(res => {
      this.setState({
        article: res.data,
      });
      console.log(this.state);
    });
  }

  render() {
    return <div>{this.state.article}</div>;
  }
}
