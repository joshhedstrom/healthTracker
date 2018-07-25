import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '4%'
  },
  margin: {
    margin: theme.spacing.unit
  }
});

class Signup extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3" align="center">
            Create Account
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="First Name (required)"
                className={classes.textField}
                margin="normal"
                fullWidth
                onChange={this.props.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                label="Last Name (required)"
                className={classes.textField}
                margin="normal"
                fullWidth
                onChange={this.props.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="username"
                label="Username (required)"
                className={classes.textField}
                margin="normal"
                fullWidth
                onChange={this.props.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="weight"
                label="Weight (optional)"
                className={classes.textField}
                margin="normal"
                fullWidth
                onChange={this.props.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="password"
                label="Password"
                className={classes.textField}
                type="password"
                margin="normal"
                fullWidth
                onChange={this.props.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="passwordConfirmation"
                label="Confirm Password"
                className={classes.textField}
                type="password"
                margin="normal"
                fullWidth
                onChange={this.props.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.props.handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);
