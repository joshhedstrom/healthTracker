import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from '../MenuDrawer'
import "./index.css";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';



const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
 
  
};


class ButtonAppBar extends React.Component {


state = {
  left: false,
};

toggleDrawer = (side, open) => () => {
  console.log("i clicked")
  this.setState({
    [side]: open,
  });
};



render () {
   const { classes } = this.props;


    const sideList = (
      <div className={classes.list}>
        <List>Dashboard</List>
        <Divider />
        <List>Water</List>
        <List>Nutrition</List>
        <List>Exercise</List>
        <List>Weight</List>
      </div>
    );


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
          </Drawer>


          <Typography variant="title" color="inherit" className={classes.flex}>
            <a style={{textDecoration: 'none', color:'white' }} href="/">
            HealthTracker
            </a>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>

  );

}


}



ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
