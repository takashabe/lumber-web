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
      title: '',
      content: '',
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
    this.setState({
      title: data.title,
      content: data.content,
    });
  }

  render() {
    const {title, content} = this.state
    return (
      <div style={style}>
        <Typography variant='headline'>{title}</Typography>
        <Typography variant='body2'>{content}</Typography>
      </div>
    );
  }
}
