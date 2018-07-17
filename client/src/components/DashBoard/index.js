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
import style from './index.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import ChartsPie from './../ChartsPie';


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
  },
  paper: {
    textAlign: 'center',
  },
  waterButton: {
    backgroundColor: '#9a67eaab',
  },
  nutritionButton: {
    backgroundColor: '#10953bb8',
  },
  exerciseButton: {
    backgroundColor: '#ea6192b5',
  },
  weightButton: {
    backgroundColor: '#4d66f0b5',
  },


};





class SimpleMediaCard extends React.Component {

state = {

};


render () {
	
  const { classes } = this.props;
  return (

    <div>
	    <Typography className={classes.root} variant="display3" align="center">
	        DashBoard
	     </Typography>

      <Card className={classes.cardUser}>
        
        <CardContent>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <ChartsPie />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography gutterBottom variant="headline" component="h2" align="center">
                Charlie Johnson
              </Typography>
              <Table> 
                <TableBody>
                  <TableRow> 
                    <TableCell>Water (Cups)</TableCell>
                      <TableCell>{this.props.water}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nutrition (Points)</TableCell>
                      <TableCell>{this.props.nutrition}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Exercise (Duration)</TableCell>
                      <TableCell>{this.props.exercise}</TableCell>
                  </TableRow>
                   <TableRow>
                    <TableCell>Weight (LBS)</TableCell>
                      <TableCell>{this.props.weight}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </CardContent>
      </Card>



  <Grid container spacing={8}>
        <Grid item xs={6} sm={3} className={classes.paper}>
            <a style={{textDecoration: 'none', color:'white' }} href="/water">
              <Button variant="contained" className={classes.waterButton}>
              <AddIcon />
                Water
              </Button>
            </a>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.paper}>
            <a style={{textDecoration: 'none', color:'white' }} href="/nutritionGoal">
              <Button variant="contained" className={classes.nutritionButton}>
               <AddIcon />
                 Nutrition
              </Button>
          </a>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.paper}>
            <a style={{textDecoration: 'none', color:'white' }} href="/exercise">
              <Button variant="contained" className={classes.exerciseButton}>
                <AddIcon />
                 Exercise
              </Button >
          </a>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.paper}>
            <a style={{textDecoration: 'none', color:'white' }} href="/weight">
              <Button variant="contained" className={classes.weightButton}>
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