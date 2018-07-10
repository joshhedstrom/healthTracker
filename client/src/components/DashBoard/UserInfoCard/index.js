import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = {
  card: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9

  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="../../../static/images/brad.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Charlie Johnson
          </Typography>
          <Typography component="p">
            Loves exercising outdoors, hiking, cooking healthy food, and the occasional slice of carrot cake
          </Typography>







          <List>
            <ListItem>
              <ListItemText primary="Water Intake" />
              <ListItemText secondary="3 Glasses" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Nutrion" />
              <ListItemText secondary="10 Points" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Exercise" />
              <ListItemText secondary="3 Hours" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Weight" />
              <ListItemText secondary="168 lbs" />
            </ListItem>
            <Divider />
          </List>

        </CardContent>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);