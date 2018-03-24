import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import 'babel-polyfill';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  root: {
    display: 'block',
    width: '80%',
    margin: '1em auto',
  },
});


class Article extends React.Component {
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
    const {classes} = this.props

    return (
      <div className={classes.root + ' content'}>
        <Typography variant='headline'>
          <span dangerouslySetInnerHTML={{__html: title}}></span>
        </Typography>
        <Typography variant='body2'>
          <span dangerouslySetInnerHTML={{__html: content}}></span>
        </Typography>
      </div>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Article);
