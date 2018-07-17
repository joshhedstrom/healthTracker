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
    marginRight: theme.spacing.unit,
    width: 200
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
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
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
  }
});

class PaperSheet extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
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
          <Grid container spacing={12}>
            <Grid item xs={12}>
              <form
                align="center"
                className={classes.formRoot}
                autoComplete="off"
              >
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="workout-simple">workout</InputLabel>
                  <Select
                    value={this.props.workout}
                    onChange={this.props.handleChange}
                    inputProps={{
                      name: 'workout',
                      id: 'workout-simple'
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Running</MenuItem>
                    <MenuItem value={2}>Walking</MenuItem>
                    <MenuItem value={3}>Strength Training</MenuItem>
                    <MenuItem value={4}>Yoga</MenuItem>
                    <MenuItem value={5}>Boxing</MenuItem>
                    <MenuItem value={6}>Swimming</MenuItem>
                    <MenuItem value={7}>HIIT</MenuItem>
                    <MenuItem value={8}>Cycling</MenuItem>
                    <MenuItem value={9}>Swimming</MenuItem>
                    <MenuItem value={10}>HIIT</MenuItem>
                    <MenuItem value={11}>Stair Stepper</MenuItem>
                    <MenuItem value={12}>Other</MenuItem>
                  </Select>
                  <FormHelperText>
                    Select the workout and duration
                  </FormHelperText>
                </FormControl>
              </form>
            </Grid>

            <Grid item xs={3}>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="addMinutes"
                  label="Minutes"
                  value={this.props.minutes}
                  onChange={this.handleChange}
                  type="number"
                  className={classes.textField}
                  margin="normal"
                  name="minutes"
                />
              </form>
            </Grid>
            <Grid item xs={3}>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="addHours"
                  label="Hours"
                  value={this.props.hours}
                  onChange={this.handleChange}
                  type="number"
                  className={classes.textField}
                  margin="normal"
                  name="hours"
                />
              </form>
            </Grid>
          </Grid>

          <Button variant="contained">Submit</Button>
        </Paper>

        <ExpansionPanel className={classes.expansionPanelStyle} defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <Typography className={classes.heading}>History</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            graph goes here
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
