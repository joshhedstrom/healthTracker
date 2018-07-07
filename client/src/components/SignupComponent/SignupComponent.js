import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';

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

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Sign up for an Account!
        </Typography>
        <Typography component="p">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                label="First Name (required)"
                className={classes.textField}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                label="Last Name (required)"
                className={classes.textField}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                label="Username (required)"
                className={classes.textField}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                  id="name"
                  label="Weight (optional)"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                >
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="password-input"
                label="Confirm Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                fullWidth
              />
            </Grid>
          </Grid>
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);

{
  /* 
<FormControl className={classes.margin}>
    <InputLabel htmlFor="input-with-icon-adornment">
        First Name (required)
            </InputLabel>
    <Input
        id="input-with-icon-adornment"
        startAdornment={
            <InputAdornment position="start">
                <AccountCircle />
            </InputAdornment>
        }
    />
</FormControl>
    <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">
            Last Name (required)
            </InputLabel>
        <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            }
        />
    </FormControl>
    <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">
            Username (required)
            </InputLabel>
        <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            }
        />
    </FormControl>
    <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">
            Password (required)
            </InputLabel>
        <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            }
        />
    </FormControl>
    <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">
            Weight (optional)
            </InputLabel>
        <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                    <AccountCircle />
                </InputAdornment>
            }
        />
    </FormControl> */
}
