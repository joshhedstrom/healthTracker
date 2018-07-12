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
            Water Goal
          </Typography>
          <Typography>
            Drink at least 8 fluid ounces each day. 
            One Glass counts as one fluid ounce 
          </Typography>
          <Typography variant="title">
            Add Water
          </Typography>
          <Typography variant="subheading">
            Today's Progress
          </Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>3 Glasses</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Button variant="outlined" size="small">+1 Glasses</Button>
          <Button variant="outlined" size="small">+3 Glasses</Button>
          <Button variant="outlined" size="small">+6 Glasses</Button>

           <form className={classes.container} noValidate autoComplete="off">
              <TextField
              id="addGlasses"
              label="Enter Water"
              value={this.state.glasses}
              onChange={this.handleChange('glasses')}
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