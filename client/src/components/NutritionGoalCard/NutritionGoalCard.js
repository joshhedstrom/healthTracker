import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import './index.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChartsBar from './../ChartsBar';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '4% 5% 0% 5%'
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
    const questions = [
      ['fruitAndVegs', 'Had 5-9 Servings of fruits and vegetables'],
      ['healthyFat', 'Consumed at least 26 grams of healthy fat'],
      ['proteinBreakfast', 'Eat at least 15 grams of protein for breakfast'],
      ['newFruit', 'Tried a new fruit or vegetable'],
      ['newReceipe', 'Experimented with a new healthy receipe'],
      ['fastFood', 'Avoided fast food'],
      ['noMeat', 'Refrained from eating meat'],
      ['skipBreakfast', "Didn't skip breakfast"],
      ['noSugar', 'Avoided sugar'],
      ['noAlcohol', 'Refrained from alcohol']
    ];
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.root} elevation={1}>
              <Typography align="center" variant="display2">
                Nutrition Goal
              </Typography>
              <Typography align="center">
                Each goal below counts as +1 point. See if you can meet
                all your goals!
              </Typography>
              <Paper id="progress">
                <Typography align="center" variant="body2">
                  Current Progress: {this.props.progress}
                </Typography>
              </Paper>
              <Grid container spacing={8}>
                <List>
                  {questions.map(question => (
                    <Grid item xs={12}>
                      <ListItem
                        key={question}
                        dense
                        button
                        className={classes.listItem}
                      >
                        <Checkbox
                          value={question[0]}
                          checked={this.props.toggled[question[0]]}
                          onChange={this.props.handleChange(question[0])}
                          color="primary"
                          disableRipple
                          tabIndex={-1}
                        />
                        <ListItemText primary={question[1]} />
                      </ListItem>
                    </Grid>
                  ))}
                </List>
              </Grid>
                <Button onClick={this.props.handleSubmit} variant="contained">
                  Submit
                </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.root} elevation={1} id="graphPaper">
              <Typography variant="title" align="center">
                History (Last 7 Days)
              </Typography>
              <ChartsBar quantities={this.props.quantities} dates={this.props.dates}/>
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
