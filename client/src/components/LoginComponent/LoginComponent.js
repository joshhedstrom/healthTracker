import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

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

function Login(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Log In
        </Typography>
        <TextField
          id="username"
          label="Username (required)"
          className={classes.textField}
          margin="normal"
          fullWidth
          onChange={props.usernameAction}
        />
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
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item xs={8} sm={4}>
              <Button
                onClick={props.onSubmit}
                variant="contained"
                color="primary"
              >
                Log In
              </Button>
            </Grid>

            <Divider />
            <Grid item xs={8} sm={4}>
              <Button href="/signup" variant="contained">
                Create New Account
              </Button>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
