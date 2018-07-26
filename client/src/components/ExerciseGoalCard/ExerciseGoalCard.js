import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './index.css';


import ChartsBar from './../ChartsBar';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "5% 4% -1% 4%"
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
    marginBottom: "-4%"
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
  },
  progressColor: {
    backgroundColor: '#825eb9b5',
    marginLeft: '19%',
    marginRight: '19%',
    marginBottom: '28px',
    marginTop: '19px',
    padding: '4px'
  },
  info: {
    margin: "3% 2% 0% 2%"
  },
  graphPaper: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "5% 4% 16% 4%"
  }
});

class ExerciseGoalCard extends React.Component {
  renderTableRows(arr) {
    return (
      arr.map((element) => {
        return (
          <TableRow>
            <TableCell>{element.exercise}</TableCell>
            <TableCell>{element.duration} Minutes</TableCell>
          </TableRow>
        )
      })
    )
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.root} elevation={1} >
              <Typography
                className={classes.header}
                variant="display1"
                align="center"
              >
                Exercise Tracker
              </Typography>
              <Typography className={classes.info} align="center">
                Select a workout below and choose the duration of the activity.
                Each activity will be tracked in minutes. Your daily workouts are displayed
                below along with a historic graph of the last 7 days. 
              </Typography>

              <Paper className={classes.progressColor}>
                <Typography align="center" variant="body2">
                  Current Progress: {this.props.totalActivity} mins
                </Typography>
              </Paper>

            

              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <form
                    align="center"
                    className={classes.formRoot}
                    autoComplete="off"
                  >
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="workout-simple">Workouts</InputLabel>
                      <Select
                        value={this.props.activity}
                        onChange={this.props.handleExerciseChange}
                        inputProps={{ name: 'activity', id: 'workout-simple' }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Walking'}>Walking</MenuItem>
                        <MenuItem value={'Jogging'}>Jogging</MenuItem>
                        <MenuItem value={'Running'}>Running</MenuItem>
                        <MenuItem value={'Swimming'}>Swimming</MenuItem>
                        <MenuItem value={'Cycling'}>Cycling</MenuItem>
                        <MenuItem value={'Yoga'}>Yoga</MenuItem>
                        <MenuItem value={'HIIT'}>HIIT</MenuItem>
                        <MenuItem value={'Strength Training'}>
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
                  </form>
                </Grid>
                <Grid item xs={12}>
                  <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="addMinutes"
                      label="Enter Minutes"
                      value={this.props.minutes}
                      onChange={this.props.handleDurationChange}
                      type="number"
                      className={classes.textField}
                      margin="normal"
                      name="minutes"
                      fullWidth
                    />
                  </form>
                </Grid>
                <Grid className={classes.submit} item xs={12}>
                  <Button onClick={this.props.addExercise} variant="contained">
                    Submit
                  </Button>
                </Grid>
              </Grid>
             </Paper>
          </Grid>



          <Grid item xs={12} md={6}>
            <Paper className={classes.root} elevation={1} id="exerciseCard">
              <Typography variant="display1" className={classes.heading} align="center">
                Today
              </Typography>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Exercises</TableCell>
                    <TableCell>Duration</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.renderTableRows(this.props.todaysActivities)}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.graphPaper} elevation={1}>
              <Typography className={classes.heading} variant="title" align="center">History (Last 7 Days)</Typography>
              <ChartsBar quantities={this.props.quantities} dates={this.props.dates}/>
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
