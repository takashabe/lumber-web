import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import 'babel-polyfill';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Typography from 'material-ui/Typography';

const style = {
  width: '100%',
  maxWidth: 500,
};

export default class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      article: null,
    };

    this.getArticle = this.getArticle.bind(this);
  }

  componentWillMount() {
    const { id } = this.props.match.params
    console.log(id)
    this.getArticle(id);
  }

  async getArticle(id) {
    const data = await axios
      .get(`/api/entry/${id}`)
      .then(res => {
        return res.data;
      })
    this.setState({article: data});
  }

  render() {
    let title, body;
    if (this.state.article === null) {
      title = <Typography variant="body1">404: Not found article</Typography>
      body = <Typography variant="body2">404: Not found article</Typography>
    } else {
      title = <Typography variant="body1">{this.state.article.Title}</Typography>
      body = <Typography variant="body2">{this.state.article.Content}</Typography>
    }

    return (
      <div style={style}>
        Article<br />
        {title}
        <br />
        {body}
      </div>
    );
  }
}
