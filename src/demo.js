import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs) {
  id += 1;
  return { id, name, calories, fat, carbs};
}

const rows = [
  createData('@UserName', 'xxxxxx.mp4', 'Uploaded', 'flipclip.com/video/auth_token/videoname.mp4'),
  createData('@UserName', 'xxxxxx.mp4', 'Uploaded', 'flipclip.com/video/auth_token/videoname.mp4'),
  createData('@UserName', 'xxxxxx.mp4', 'Uploaded', 'flipclip.com/video/auth_token/videoname.mp4'),
  createData('@UserName', 'xxxxxx.mp4', 'Uploaded', 'flipclip.com/video/auth_token/videoname.mp4'),
  createData('@UserName', 'xxxxxx.mp4', 'Uploaded', 'flipclip.com/video/auth_token/videoname.mp4'),
  createData('@UserName', 'xxxxxx.mp4', 'Uploaded', 'flipclip.com/video/auth_token/videoname.mp4'),
  createData('@UserName', 'xxxxxx.mp4', 'Uploaded', 'flipclip.com/video/auth_token/videoname.mp4'),
  createData('@UserName', 'xxxxxx.mp4', 'Uploaded', 'flipclip.com/video/auth_token/videoname.mp4')

];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Video Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
