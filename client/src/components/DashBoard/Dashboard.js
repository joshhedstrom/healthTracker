import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './index.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import FontAwesome from 'react-fontawesome';
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
    width: '46px',
    height: '46px',
    margin: '5%'
  },
  NutritionAvatar: {
    backgroundColor: '#10953bb8',
    width: '46px',
    height: '46px',
    margin: '5%'
  },
  exerciseAvatar: {
    backgroundColor: '#ea6192b5',
    width: '46px',
    height: '46px',
    margin: '5%'
  },
  weightAvatar: {
    backgroundColor: '#4d66f08a',
    width: '46px',
    height: '46px',
    margin: '5%'
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
            <Grid container spacing={0}>
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
                  {this.props.firstName} {this.props.lastName}
                </Typography>
                <Typography>
                  All your daily health tracking information is displayed below.
                  To quickly track your progress, click on the icons to access
                  the specific goal pages
                </Typography>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className={classes.tableCellStyle}>
                        Water (Cups)
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        {this.props.water}
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        <Tooltip title="Go to Water Page" placement="right">
                          <Avatar className={classes.waterAvatar}>
                            <a
                              style={{ textDecoration: 'none', color: 'white' }}
                              href="/water"
                            >
                              <FontAwesome
                                className="fas fa-tint"
                                name="rocket"
                                size="lg"
                                style={{
                                  textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                                }}
                              />
                            </a>
                          </Avatar>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.tableCellStyle}>
                        Nutrition (Points)
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        {this.props.nutrition}
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        <Tooltip title="Go to Nutrition Page" placement="right">
                          <Avatar className={classes.NutritionAvatar}>
                            <a
                              style={{ textDecoration: 'none', color: 'white' }}
                              href="/nutrition"
                            >
                              <FontAwesome
                                className="fas fa-utensils"
                                size="lg"
                                style={{
                                  textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                                }}
                              />
                            </a>
                          </Avatar>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.tableCellStyle}>
                        Exercise (Duration)
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        {this.props.exercise}
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        <Tooltip title="Go to Exercise Page" placement="right">
                          <Avatar className={classes.exerciseAvatar}>
                            <a
                              style={{ textDecoration: 'none', color: 'white' }}
                              href="/exercise"
                            >
                              <FontAwesome
                                className="fas fa-dumbbell"
                                size="lg"
                                style={{
                                  textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                                }}
                              />
                            </a>
                          </Avatar>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.tableCellStyle}>
                        Weight (LBS)
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        {this.props.weight}
                      </TableCell>
                      <TableCell className={classes.tableCellStyle}>
                        <Tooltip title="Go to Weight Page" placement="right">
                          <Avatar className={classes.weightAvatar}>
                            <a
                              style={{ textDecoration: 'none', color: 'white' }}
                              href="/weight"
                            >
                              <FontAwesome
                                className="fas fa-weight"
                                size="lg"
                                style={{
                                  textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                                }}
                              />
                            </a>
                          </Avatar>
                        </Tooltip>
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