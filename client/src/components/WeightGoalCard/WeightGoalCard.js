import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ChartsLine from './../ChartsLine';
import './weightGoal.css';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "5% 4% -3% 4%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  container: {
    width: '97%'
  },
  expansionPanelStyle: {
    margin: 11
  },
  center: {
    textAlign: 'center'
  },
  progressColorWeight: {
    backgroundColor: '#4d66f08a',
    marginLeft: '20%',
    marginRight: '20%',
    marginBottom: "28px",
    marginTop: "19px",
    padding: "4%",
  },
  buttonStyle: {
    marginTop: "4%"
  },
  info: {
    margin: "3% 8% 0% 8%"
  }
});

class WeightGoalsComponent extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} className={classes.center}>
            <Paper className={classes.root} elevation={1} id="weightCardTracker">
              <Typography align="center" variant="display1">
                Weight Tracker
              </Typography>
              <Typography className={classes.info}>
                Enter your current weigth below. Track as often as needed
              </Typography>
              <Paper className={classes.progressColorWeight}>
                <Typography align="center" variant="body2">Current Weight: {this.props.weight + "lbs"} </Typography>
              </Paper>

              <form
                className={classes.container}
                noValidate
                autoComplete="off"
                align="center"
              >
                <TextField
                  
                  id="addWeight"
                  label="Enter Weight"
                  fullWidth
                  // value={this.props.weight}
                  onChange={this.props.handleChange}
                  type="number"
                  className={classes.textField}
                  margin="normal"
                  value={this.props.updatedWeight}
                />
              </form>
              <Button onClick={this.props.handleClick} variant="contained" className={classes.buttonStyle}>
                Submit
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.root} elevation={1} id="weightCardGraph">
              <Typography variant="title" align="center">
                History (Last 30 Days)
              </Typography>
              <ChartsLine quantities={this.props.quantities} dates={this.props.dates}/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

WeightGoalsComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WeightGoalsComponent);
