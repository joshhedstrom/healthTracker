import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Charts from './../Charts';


const styles = {
  cardUser: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9

  },
  card: {
    marginTop: 11,
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  button: {
    
  },
  input: {
    display: 'none',
  },
  divStyle: {
    padding: 14,

  },
  infoButton: {
    minWith: 0,
  },
  root: {
      flexGrow: 1,
  },
  gridContainer: {
    marginTop: 2,
  }
};





class SimpleMediaCard extends React.Component {

state = {

};


render () {



  const { classes } = this.props;
  return (
    <div>
      <Card className={classes.cardUser}>
        
        <CardContent>
          <Charts />
          <Typography gutterBottom variant="headline" component="h2">
            Charlie Johnson
          </Typography>
          <Typography component="p">
            Loves exercising outdoors, hiking, cooking healthy food, and the occasional slice of carrot cake
          </Typography>

          <List>
            <ListItem>
              <ListItemText primary="Water Intake" />
              <ListItemText secondary={"Glasses: " + this.props.water} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Nutrion" />
              <ListItemText secondary={"Points: " + this.props.nutrition} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Exercise" />
              <ListItemText secondary={"Duration: " + this.props.exercise + " Minutes"} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Weight" />
              <ListItemText secondary={"Weight: " + this.props.weight} />
            </ListItem>
            <Divider />
          </List>

        </CardContent>
      </Card>


      <Grid className={classes.gridContainer} container spacing={24} justify="center" >
        <Grid justify="center" item xs={24}>
          <a style={{textDecoration: 'none', color:'white' }} href="/water">
            <Button variant="contained">
            <AddIcon />
              Water
            </Button>
          </a>
        </Grid>
     
     
        <Grid justify="center" item xs={24}>
          <a style={{textDecoration: 'none', color:'white' }} href="/nutritionGoal">
            <Button variant="contained">
             <AddIcon />
               Nutrition
            </Button>
          </a>
        </Grid>

 
        <Grid justify="center" item xs={24}>
          <a style={{textDecoration: 'none', color:'white' }} href="/exercise">
            <Button variant="contained">
              <AddIcon />
               Exercise
            </Button >
          </a>
        </Grid>
        
        <Grid justify="center" item xs={24}>
          <a style={{textDecoration: 'none', color:'white' }} href="/weight">
            <Button variant="contained">
              <AddIcon />
               Weight
            </Button>
          </a>
        </Grid>
     


      </Grid>


    </div>
    );
  }

}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);