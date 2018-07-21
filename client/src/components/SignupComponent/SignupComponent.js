import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';



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



class Signup extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            Create Account
          </Typography>
          <h4>{this.props.message}</h4>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                label="First Name (required)"
                className={classes.textField}
                margin="normal"
                fullWidth
                onChange={this.props.firstNameAction}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                label="Last Name (required)"
                className={classes.textField}
                margin="normal"
                fullWidth
                onChange={this.props.lastNameAction}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="username"
                label="Username (required)"
                className={classes.textField}
                margin="normal"
                fullWidth
                onChange={this.props.usernameAction}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="weight"
                label="Weight (optional)"
                className={classes.textField}
                margin="normal"
                fullWidth
                onChange={this.props.weightAction}
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
                onChange={this.props.passwordAction}
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
                onChange={this.props.passwordConfirmAction}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.props.submitAction}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>

         <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.props.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>











      </div>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);
