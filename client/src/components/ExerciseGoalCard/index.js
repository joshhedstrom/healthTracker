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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';



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
  rootList: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
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
          <Typography variant="display1">
            Exercsie Goal
          </Typography>
          <Typography>
            Select the workout and duration
          </Typography>
         

          <Typography variant="subheading">
            Today's Progress
          </Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Worked Out 2 Hours</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <List className={classes.rootList} subheader={<li />}>
              {[0].map(sectionId => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
              <ul className={classes.ul}>
            <ListSubheader>{`Select Workout`}</ListSubheader>
            {[
              'Running', 'Walking', 'Strength Training', 'Yoga', 'Boxing',
              'Swimming', 'HIIT', 

            ].map(item => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={` ${item}`} />
                      </ListItem>
                    ))}
                  </ul>
                </li>
              ))}
          </List>
          


          <Grid container spacing={12}>
            <Grid item xs={3}>
             <form className={classes.container} noValidate autoComplete="off">
                <TextField
                id="addMinutes"
                label="Minutes"
                value={this.state.Minutes}
                onChange={this.handleChange('Minutes')}
                type="number"
                className={classes.textField}
                margin="normal"
              />
              </form>
            </Grid>
            <Grid item xs={3}>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                id="addHours"
                label="Hours"
                value={this.state.Hours}
                onChange={this.handleChange('Hours')}
                type="number"
                className={classes.textField}
                margin="normal"
              />
              </form>
            </Grid>
          </Grid>

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