import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 10
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
    // width: 200
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  expansionPanelStyle: {
    margin: 11
  },
  rootList: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    // position: 'relative',
    // overflow: 'auto',
    maxHeight: 300
  },
  listSection: {
    backgroundColor: 'inherit'
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0
  },
  header: {
    marginBottom: 28
  },
  formRoot: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  submit: {
    textAlign: 'center'
  }
});

class ExerciseGoalCard extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.root} elevation={1}>
              <Typography
                className={classes.header}
                variant="display1"
                align="center"
              >
                Exercise Goal
              </Typography>

              <Typography variant="subheading">Today's Progress</Typography>
              <p>{this.props.history}</p>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <form
                    align="center"
                    className={classes.formRoot}
                    autoComplete="off"
                  >
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="workout-simple">workout</InputLabel>
                      <Select
                        value={this.props.activity}
                        onChange={this.props.handleChange}
                        inputProps={{ name: 'activity', id: 'workout-simple' }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={'walking'}>Walking</MenuItem>
                        <MenuItem value={'jogging'}>Jogging</MenuItem>
                        <MenuItem value={'running'}>Running</MenuItem>
                        <MenuItem value={'swimming'}>Swimming</MenuItem>
                        <MenuItem value={'cycling'}>Cycling</MenuItem>
                        <MenuItem value={'yoga'}>Yoga</MenuItem>
                        <MenuItem value={'hiit'}>HIIT</MenuItem>
                        <MenuItem value={'strengthTraining'}>
                          Strength Training
                        </MenuItem>
                        <MenuItem value={'stairStepper'}>
                          Stair Stepper
                        </MenuItem>
                        <MenuItem value={'boxing'}>Boxing</MenuItem>
                        <MenuItem value={'other'}>Other</MenuItem>
                      </Select>
                      <FormHelperText>
                        Select the workout and duration
                      </FormHelperText>
                    </FormControl>
                  </form>
                </Grid>
                <Grid item xs={6}>
                  <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="addHours"
                      label="Hours"
                      value={this.props.hours}
                      onChange={this.props.handleChange}
                      type="number"
                      className={classes.textField}
                      margin="normal"
                      name="hours"
                      fullWidth
                    />
                  </form>
                </Grid>
                <Grid item xs={6}>
                  <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="addMinutes"
                      label="Minutes"
                      value={this.props.minutes}
                      onChange={this.props.handleChange}
                      type="number"
                      className={classes.textField}
                      margin="normal"
                      name="minutes"
                      fullWidth
                    />
                  </form>
                </Grid>
                <Grid className={classes.submit} item xs={12}>
                  <Button onClick={this.props.handleSubmit} variant="contained">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.root} elevation={1}>
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
                  graph goes here
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ExerciseGoalCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExerciseGoalCard);
