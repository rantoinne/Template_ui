import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';



const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


function App(props) {
  const { classes } = props;
  
  
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" align="center">
            <img alt='upload' src="https://i.imgur.com/9EgzVgy.png" height="80px"/>
          </Typography>
          <Typography variant="headline" component="h2" align="center">
            Upload Videos
          </Typography>
          <Typography className={classes.pos} color="textSecondary" align="center">
            
          </Typography>
          {/* <Typography variant="headline" component="h2" align="center">
            User ID-<br />
            {'File Size-'}
          </Typography> */}
          <Typography>
            <div >
            <FilePond allowMultiple={true} server="http://192.168.33.10"/>
      
            </div>
          </Typography>
        </CardContent>
        {/* <CardActions >
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
