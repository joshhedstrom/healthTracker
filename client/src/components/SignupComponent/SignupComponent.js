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
    paddingBottom: theme.spacing.unit * 2
  },
  margin: {
    margin: theme.spacing.unit
  }
});

function Signup(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Create Account
        </Typography>
        <h4>{props.message}</h4>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              label="First Name (required)"
              className={classes.textField}
              margin="normal"
              fullWidth
              onChange={props.firstNameAction}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              label="Last Name (required)"
              className={classes.textField}
              margin="normal"
              fullWidth
              onChange={props.lastNameAction}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="username"
              label="Username (required)"
              className={classes.textField}
              margin="normal"
              fullWidth
              onChange={props.usernameAction}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="weight"
              label="Weight (optional)"
              className={classes.textField}
              margin="normal"
              fullWidth
              onChange={props.weightAction}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="password"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              fullWidth
              onChange={props.passwordAction}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="passwordConfirmation"
              label="Confirm Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              fullWidth
              onChange={props.passwordConfirmAction}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={props.submitAction}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);
