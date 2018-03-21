import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    marginTop: 0,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
});

function Header(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to='/' className={classes.link}>
            <Typography variant="title" color="inherit" className={classes.flex}>
              takashabe's blog
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
