import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';




const styles = {
  root: {
    margin: "5%",
    padding: "1% 5% 4% 6%",
    marginTop: "10%"
  },
  header: {
    margin: "2% 2% 8% 2%",
    fontSize: "261%"
  },
  typeSpace: {
    padding: "2% 1% 5% 1%"

  }

};

class Info extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
      

        <Paper className={classes.root} align="center">
          <Typography variant="display1" align="center" className={classes.header}>
          How to Use HealthTracker
        </Typography>

          <Typography variant="body2" className={classes.typeSpace} align="center">
            HealthTracker is a simple health application to keep track of your nutrition goals, water consumption,
            exercise, and weight. 
          </Typography>

          <Typography variant="body2" className={classes.typeSpace}>
            <Typography align="center" variant="title" className={classes.typeSpace}>
              Dashboard - Your Main Page 
            </Typography>

            When you log in, your dashboard will display your current daily progress.

          <Typography variant="subheading" className={classes.typeSpace}>
            <Typography align="center" variant="title" className={classes.typeSpace}>
              How to Track Goals
            </Typography>

            While in the dashboard, simply click on the icons (water, nutrition, exercise, and weight)
            to be directed to track your progress today.
          </Typography>

          <Typography variant="body2" className={classes.typeSpace}>

            Otherwise, click on the icon in the left-hand side of the navigation bar at the top of the screen
            and you will see a list of all goals
          </Typography>

          </Typography>

          <Typography variant="body2" className={classes.typeSpace} align="center">
            Happy Tracking! 
          </Typography>
        </Paper>
      </div>
    );
  }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Info);