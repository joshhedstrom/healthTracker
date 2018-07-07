import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    left: false
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>Home</List>
        <Divider />
        <List>Other</List>
      </div>
    )

    const fullList = (
      <div className={classes.fullList}>
        <List>other words</List>
        <Divider />
        <List>other words</List>
      </div>
    )

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
