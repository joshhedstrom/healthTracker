import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ChartsBar from './../ChartsBar';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 10
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  expansionPanelStyle: {
    margin: 11
  }
});

class WeightGoalsComponent extends React.Component {
  state = {
    weight: 168,
    lastWeight: 168,
    weightHistoryData: []
  };

  componentDidMount() {
    //Axios get request to get weight data from backend
    //this.setState({weightHistoryData: response})
    //Fill chart.js
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  onSubmit = event => {
    //Axios post to backend with data
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={44}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.root} elevation={1}>
              <Typography align="center" variant="display1">
                Weight Tracker
              </Typography>
              <Typography variant="subheading">
                Current Weight: {this.state.lastWeight + ' lbs'}
              </Typography>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="addWeight"
                  label="Enter Weight"
                  value={this.state.weight}
                  onChange={this.handleChange('weight')}
                  type="number"
                  className={classes.textField}
                  margin="normal"
                  placeholder={this.state.lastWeight}
                />
              </form>
              <Button onClick={this.onSubmit.bind()} variant="contained">
                Submit
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="title" align="center">
                History (Last 7 Days)
              </Typography>
              <ChartsBar />
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
