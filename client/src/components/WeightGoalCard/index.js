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
    margin: 10,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  expansionPanelStyle: {
    margin: 11,
  },
  header: {
    marginBottom: 28,
  },
  desc: {
    marginBottom: 10,
  },



});


class PaperSheet extends React.Component {

  state = {
    glasses: ''

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  };



render () {
  const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography className={classes.header} variant="display1" align="center">
            Weight Tracker
          </Typography>
          <Typography className={classes.desc}>
            Enter your weight as frequently as needed
          </Typography>
         
          <Typography variant="subheading">
            Current Weight
          </Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>168 Lbs</TableCell>
              </TableRow>
            </TableBody>
          </Table>

       

           <form className={classes.container} noValidate autoComplete="off">
              <TextField
              id="addWeight"
              label="Enter Weight"
              value={this.state.Weight}
              onChange={this.handleChange('Weight')}
              type="number"
              className={classes.textField}
              margin="normal"
            />
            </form>
          <Button variant="contained">Submit</Button>
        </Paper>
      
          <ExpansionPanel  className={classes.expansionPanelStyle} defaultExpanded>
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);