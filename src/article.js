import React from 'react';
import axios from 'axios';
import 'babel-polyfill';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';

export default class Article extends React.Component {
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
          // TODO(takashabe): link to detail article path with SPA router
          <ListItem key={n.id} component="a" href="#list">
            <ListItemText primary={n.title} />
          </ListItem>
        );
      });

    return <List>{rows}</List>;
  }
}
