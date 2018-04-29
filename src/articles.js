import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import 'babel-polyfill';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import {Link} from 'react-router-dom';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    width: '80%',
    margin: '1em auto',
  },
  link: {
    textDecoration: 'none',
  },
  title: {
    fontSize: '1.5em',
  },
});

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null,
    };

    this.getTitles = this.getTitles.bind(this);
  }

  componentWillMount() {
    let start = this.props.start;
    if (start === undefined) start = 0;
    this.getTitles(start);
  }

  async getTitles(start) {
    const len = 10;
    axios.get(`/api/titles/${start}/${len}`).then(res => {
      this.setState({
        articles: res.data.data,
      });
    });
  }

  render() {
    const {classes} = this.props
    let rows;
    if (this.state.articles === null)
      rows = (
        <ListItem>
          <ListItemText primary="Loading..." />
        </ListItem>
      );
    else
      rows = this.state.articles.map(n => {
        return (
          <ListItem key={n.id}>
            <Link to={`/entries/${n.id}`} className={classes.link}>
              <Typography variant="title">{n.title}</Typography>
            </Link>
          </ListItem>
        );
      });

    return (
      <div className={classes.root + ' content'}>
        <List>{rows}</List>
      </div>
    );
  }
}

Articles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Articles);
