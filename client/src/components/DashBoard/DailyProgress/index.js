import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
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



 

});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <div className={classes.root} >

      <Grid className={classes.gridContainer} container spacing={24} justify="center" >
        <Grid justify="center" item xs={24}>
          <Button variant="contained">
          <AddIcon />
            Water
          </Button>
        </Grid>
        <Grid justify="center" item xs={24}>
          <Button variant="contained">
           <AddIcon />
             Nutrition
          </Button>
        </Grid>

 
        <Grid justify="center" item xs={24}>
          <Button variant="contained">
            <AddIcon />
             Exercise
          </Button >
        </Grid>
        <Grid justify="center" item xs={24}>
          <Button variant="contained">
            <AddIcon />
             Weight
          </Button>
        </Grid>


      </Grid>







    </div>


  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);