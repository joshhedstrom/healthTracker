import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./index.css";
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



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
  
  this.setState({
    [side]: open,
  });
};



render () {
   const { classes } = this.props;


    const sideList = (

      <div className={classes.list}>
        <div component="nav">
        <a style={{textDecoration: 'none', color:'white' }} href="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
         </a>
          <Divider />

          <a style={{textDecoration: 'none', color:'white' }} href="/waterGoal">
            <ListItem button>
              <ListItemText primary="Water" />
            </ListItem>
           </a>
          <a style={{textDecoration: 'none', color:'white' }} href="/nutritionGoal">
            <ListItem button>
                <ListItemText primary="Nutrition" />
            </ListItem>
          </a>
          <a style={{textDecoration: 'none', color:'white' }} href="/exerciseGoal">
            <ListItem button>
              <ListItemText primary="Exercise" />
            </ListItem>
          </a>
          <a style={{textDecoration: 'none', color:'white' }} href="/weightGoal">
            <ListItem button>
              <ListItemText primary="Weight" />
            </ListItem>
            <Divider />
          </a>
          <a style={{textDecoration: 'none', color:'white' }} href="">
            <ListItem button>
              <ListItemText primary="Log Out" />
            </ListItem>
          </a>

        </div>
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
          <a style={{textDecoration: 'none', color:'white' }} href="/login">
            <Button color="inherit">Login</Button>
          </a>
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
