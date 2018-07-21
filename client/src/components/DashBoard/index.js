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
import style from './index.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import FontAwesome from "react-fontawesome"





import ChartsPie from './../ChartsPie';

const styles = {
  cardUser: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  card: {
    marginTop: 11,
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  button: {},
  input: {
    display: 'none'
  },
  divStyle: {
    padding: 14
  },
  infoButton: {
    minWith: 0
  },
  root: {
    flexGrow: 1
  },
  gridContainer: {
    marginTop: 2
  },
  paper: {
    textAlign: 'center'
  },
  waterButton: {
    backgroundColor: '#63c5e4'
  },
  nutritionButton: {
    backgroundColor: '#10953bb8'
  },
  exerciseButton: {
    backgroundColor: '#ea6192b5'
  },
  weightButton: {
    backgroundColor: '#4d66f08a'
  },
  waterAvatar: {
     backgroundColor: '#63c5e4',
     width: "61px",
    height: "61px"
  },
  NutritionAvatar: {
     backgroundColor: '#10953bb8',
     width: "61px",
    height: "61px"
  },
  exerciseAvatar: {
     backgroundColor: '#ea6192b5',
     width: "61px",
    height: "61px"
  },
  weightAvatar: {
     backgroundColor: '#4d66f08a',
     width: "61px",
    height: "61px"
  },
  tableCellStyle: {
    padding: 0
  }
  



};

class Dashboard extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography className={classes.root} variant="display3" align="center">
          DashBoard
        </Typography>
        <Card className={classes.cardUser}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <ChartsPie
                  waterChart={this.props.water}
                  nutritionChart={this.props.nutrition}
                  exerciseChart={this.props.exercise}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  gutterBottom
                  variant="headline"
                  component="h2"
                  align="center"
                >
                  Charlie Johnson
                </Typography>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className={classes.tableCellStyle}>Water (Cups)</TableCell>
                      <TableCell className={classes.tableCellStyle}>{this.props.water}</TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        <Avatar className={classes.waterAvatar}>
                          <a style={{ textDecoration: 'none', color: 'white' }} href="/water">
                            <FontAwesome
                            className='fas fa-tint'
                            name='rocket'
                            size='2x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                          </a>
                        </Avatar>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.tableCellStyle}>Nutrition (Points)</TableCell>
                      <TableCell className={classes.tableCellStyle}>{this.props.nutrition}</TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        <Avatar className={classes.NutritionAvatar}>
                          <a
                              style={{ textDecoration: 'none', color: 'white' }}
                              href="/nutrition"
                            >
                            <FontAwesome
                            className='fas fa-utensils'
                            size='2x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                          </a>
                        </Avatar>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.tableCellStyle}>Exercise (Duration)</TableCell>
                      <TableCell className={classes.tableCellStyle}>{this.props.exercise}</TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        <Avatar className={classes.exerciseAvatar}>
                         <a
                            style={{ textDecoration: 'none', color: 'white' }}
                            href="/exercise"
                          >
                          <FontAwesome
                          className='fas fa-dumbbell'
                          size='2x'
                          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                          />
                        </a>
                      </Avatar>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.tableCellStyle}>Weight (LBS)</TableCell>
                      <TableCell className={classes.tableCellStyle}>{this.props.weight}</TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        <Avatar className={classes.weightAvatar}>
                          <a
                              style={{ textDecoration: 'none', color: 'white' }}
                              href="/weight"
                            >
                            <FontAwesome
                            className='fas fa-weight'
                            size='2x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                          </a>
                        </Avatar>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
