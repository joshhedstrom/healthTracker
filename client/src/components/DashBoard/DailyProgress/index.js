import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  card: {
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
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  divStyle: {
    padding: 14
  }
});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <div className={classes.divStyle}>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">Water Intake</Typography>
             <Button variant="contained" color="primary" aria-label="add" className={classes.button}>
              Add
              <AddIcon />
           </Button>

          </CardContent>
          
        </div>
        
      </Card>

      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">Nutrition</Typography>
            <Button variant="contained" color="primary" aria-label="add" className={classes.button}>
              Add
              <AddIcon />
           </Button>
          </CardContent>
        </div>
      </Card>

      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">Exercise</Typography>
            <Button variant="contained" color="primary" aria-label="add" className={classes.button}>
              Add
              <AddIcon />
           </Button>
          </CardContent>
        </div>
      </Card>

      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">Weight</Typography>
            <Button variant="contained" color="primary" aria-label="add" className={classes.button}>
              Add
              <AddIcon />
           </Button>
          </CardContent>
        </div>
      </Card>




    </div>


  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);