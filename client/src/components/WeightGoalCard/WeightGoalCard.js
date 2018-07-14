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
    weightHistoryData: [],
  }

  componentDidMount() {
    //Axios get request to get weight data from backend
    //this.setState({weightHistoryData: response})
    //Fill chart.js
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  }

  onSubmit = event => {
      //Axios post to backend with data
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography align="center" variant="display1">Weight Tracker</Typography>
          <br />
          <Typography variant="subheading">Current Weight</Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>{this.state.lastWeight + ' lbs'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

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
          <Button onClick={this.onSubmit.bind()} variant="contained">Submit</Button>
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

WeightGoalsComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WeightGoalsComponent);