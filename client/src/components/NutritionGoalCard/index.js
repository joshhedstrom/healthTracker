import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox'

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
  }


});


class PaperSheet extends React.Component {

  state = {
    glasses: '',
    healthyFat: false,
    proteinBreakfast: false,
    newFruit: false,
    newReceipe: false,
    fastFood: false,
    noMeat: false,
    skipBreakfast: false,
    noSugar: false,
    noAlcohol: false,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    }),
   this.setState({ 
    [name]: event.target.checked });

  };



render () {
  const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="display1">
            Nutrition Goal
          </Typography>
          <Typography>
            Each goal below counts as 1+ points. Try to see if you can meet all of these goals!
          </Typography>
         

          <Typography variant="subheading">
            Today's Progress
          </Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>4 Points</TableCell>
              </TableRow>
            </TableBody>
          </Table>

        
        <FormControl component="fieldset">
          <Typography variant="title">
            Select All Goals You Achieved Today 
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.fruitAndVegs}
                  onChange={this.handleChange('fruitAndVegs')}
                  value="fruitAndVegs"
                  color="primary"
                />
              }
              label="Had 5-9 Servings of Fruits and Vegetables"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.healthyFat}
                  onChange={this.handleChange('healthyFat')}
                  value="healthyFat"
                  color="primary"
                />
              }
              label="Consumed at least 26 grams of healthy fat each day"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.proteinBreakfast}
                  onChange={this.handleChange('proteinBreakfast')}
                  value="proteinBreakfast"
                  color="primary"
                />
              }
              label="Eat at least 15 grams of protein for breakfast"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.newFruit}
                  onChange={this.handleChange('newFruit')}
                  value="newFruit"
                  color="primary"
                />
              }
              label="Tried a new Fruit or Vegetables"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.newReceipe}
                  onChange={this.handleChange('newReceipe')}
                  value="newReceipe"
                  color="primary"
                />
              }
              label="Experimented with a new healthy receipe"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.fastFood}
                  onChange={this.handleChange('fastFood')}
                  value="fastFood"
                  color="primary"
                />
              }
              label="Avoided Fast Food"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.noMeat}
                  onChange={this.handleChange('noMeat')}
                  value="noMeat"
                  color="primary"
                />
              }
              label="Refrained from eating meat"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.skipBreakfast}
                  onChange={this.handleChange('skipBreakfast')}
                  value="skipBreakfast"
                  color="primary"
                />
              }
              label="Didn't skip breakfast"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.skipBreakfast}
                  onChange={this.handleChange('skipBreakfast')}
                  value="skipBreakfast"
                  color="primary"
                />
              }
              label="Didn't skip breakfast"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.noSugar}
                  onChange={this.handleChange('noSugar')}
                  value="noSugar"
                  color="primary"
                />
              }
              label="Avoided Sugar"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.noAlcohol}
                  onChange={this.handleChange('noAlcohol')}
                  value="noAlcohol"
                  color="primary"
                />
              }
              label="Refrained from alcohol"
            />



          </FormGroup>
          <Button variant="contained">Submit</Button>
      </FormControl>

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