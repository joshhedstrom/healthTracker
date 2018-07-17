import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid';
import style from './index.css';
import Chip from '@material-ui/core/Chip';




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
    console.log("nutr goal clicked" + event.target.name)
    this.setState({
      [name]: event.target.value,
    })
   this.setState({ 
    [name]: event.target.checked });

  };



render () {
  const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>

            <Paper id="Parker" className={classes.root} elevation={1}>
              <Typography align="center" variant="display2">
                Nutrition Goal
              </Typography>
              <Paper>
                <Typography>Current Progress: 9</Typography>
              </Paper>

             

              <Typography align="center">
                Each goal below counts as 1+ points. Try to see if you can meet all of these goals!
              </Typography>
            <FormControl component="fieldset" >
              <Typography  variant="title" align="center" className={classes.formHeader}>
                Select All Goals You Achieved Today 
              </Typography>
              <Grid container spacing={12}>
                <FormGroup>
                  <Grid item xs={12} sm={6}>
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
                  </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>

              </FormGroup>
          
              <Button variant="contained">Submit</Button>
            </Grid>
          </FormControl>
        </Paper>
      </Grid>



      <Grid item xs={12} sm={6}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="title" align="center">History (Last 7 Days)</Typography>
          <Typography>Graph goes here </Typography>
        </Paper>
      </Grid>
    </Grid>



      </div>
  );

  }
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);