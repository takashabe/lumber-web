import React from 'react';
import axios from 'axios';
import 'babel-polyfill';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import {Link} from 'react-router-dom';

export default class Articles extends React.Component {
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
    let rows;
    if (this.state.articles === null)
      rows = (
        <ListItem>
          <ListItemText primary="Not found articles" />
        </ListItem>
      );
    else
      rows = this.state.articles.map(n => {
        return (
          <ListItem key={n.id}>
            <Link to={`/entries/${n.id}`}>
              <ListItemText primary={n.title} />
            </Link>
          </ListItem>
        );
      });

    return (
      <div>
        Entries<br />
        <List>{rows}</List>
      </div>
    );
  }
}
