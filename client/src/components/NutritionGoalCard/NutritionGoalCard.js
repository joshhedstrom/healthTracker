import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import style from './index.css';
import green from '@material-ui/core/colors/green';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "4% 5% 0% 5%"
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

class NutritionGoalCard extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.root} elevation={1}>
              <Typography align="center" variant="display2">
                Nutrition Goal
              </Typography>
              <Typography align="center">
                Each goal below counts as 1+ points. Try to see if you can meet
                all of these goals!
              </Typography>
              <Paper id="progress">
                <Typography align="center">
                  Current Progress: {this.props.progress}
                </Typography>
              </Paper>
              <FormControl component="fieldset">
                <Typography
                  id="formTitle"
                  variant="title"
                  align="center"
                  className={classes.formHeader}
                >
                  Select All Goals You Achieved Today
                </Typography>
                <Grid container spacing={12}>
                  <FormGroup>
                    <Grid item xs={12} sm={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={this.props.handleChange('fruitAndVegs')}
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
                            onChange={this.props.handleChange('healthyFat')}
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
                            onChange={this.props.handleChange(
                              'proteinBreakfast'
                            )}
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
                            onChange={this.props.handleChange('newFruit')}
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
                            onChange={this.props.handleChange('newReceipe')}
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
                            onChange={this.props.handleChange('fastFood')}
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
                            onChange={this.props.handleChange('noMeat')}
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
                            onChange={this.props.handleChange('skipBreakfast')}
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
                            onChange={this.props.handleChange('skipBreakfast')}
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
                            onChange={this.props.handleChange('noSugar')}
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
                            onChange={this.props.handleChange('noAlcohol')}
                            value="noAlcohol"
                            color="primary"
                          />
                        }
                        label="Refrained from alcohol"
                      />
                    </Grid>
                  </FormGroup>
                  <Button onClick={this.props.handleSubmit} variant="contained">
                    Submit
                  </Button>
                </Grid>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="title" align="center">
                History (Last 7 Days)
              </Typography>
              <Typography>Graph goes here </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

NutritionGoalCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NutritionGoalCard);
