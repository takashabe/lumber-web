import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    width: '100%',
  },
  footer: {
    width: '80%',
    margin: '1em auto',
  },
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
});

function Footer(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Divider />
      <div className={classes.footer}>
        <Typography variant="caption" color="inherit" className={classes.flex}>
          Copyright © 2018 <a href="https://github.com/takashabe">takashabe</a>. All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
