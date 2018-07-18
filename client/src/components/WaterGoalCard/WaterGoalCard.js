import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ChartsBar from './../ChartsBar';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 10
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  expansionPanelStyle: {
    margin: 11
  }
})

class WaterGoalCard extends React.Component {
  state = {
    glasses: 0,
    incrementer: 0,
    historyData: [],
  }

  componentDidMount() {
    //pull water data from backend
  }

  addGlass = value => {
    let newGlasses = value + this.state.glasses;
    this.setState({ glasses: newGlasses });
    axios.post("http://localhost:3001/api/healthTracker/addWater", {water: value, userId: localStorage.userId } )
    .then(data => console.log(data));
    console.log(value)
  };

  incrementGlass = event => {
    let newGlasses = this.state.incrementer + this.state.glasses;
    this.setState({ glasses: newGlasses, incrementer: 0 });
  };

  increment = event => {
    this.setState({ incrementer: parseInt(event.target.value) });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography variant="display1">Water Goal</Typography>
              <Typography>
                Drink at least 8 glasses of 8 fluid ounces each day.
              </Typography>
              <br />
              <Typography variant="subheading">
                Today's Progress: {this.state.glasses} glasses
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={() => this.addGlass(1)}
                value="1"
                variant="outlined"
                size="small"
              >
                +1 Glasses
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={() => this.addGlass(3)}
                value="3"
                variant="outlined"
                size="small"
              >
                +3 Glasses
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={() => this.addGlass(6)}
                value="6"
                variant="outlined"
                size="small"
              >
                +6 Glasses
              </Button>
            </Grid>
            <Grid item xs={12}>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="addGlasses"
                  label="Enter Water"
                  fullWidth
                  type="number"
                  margin="normal"
                  onChange={this.increment.bind()}
                />
              </form>
            </Grid>
            <Grid item xs={12}>
              <Button onClick={this.incrementGlass.bind()} variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={24}>
          <Grid item xs={12}>
            <ExpansionPanel
              className={classes.expansionPanelStyle}
              defaultExpanded
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classes.column}>
                  <Typography className={classes.heading}>History</Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                 <ChartsBar />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>

      </div>
    );
  }
}

WaterGoalCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WaterGoalCard);

