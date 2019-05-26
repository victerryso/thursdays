import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import TableChartIcon from '@material-ui/icons/TableChart';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer'
  },
}));

function Header({ switchToHome, switchToTable }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='primary'>
        <Toolbar>

          <Typography variant="h6" className={classes.title} onClick={switchToHome}>
            Thursdays
          </Typography>

          <IconButton color="inherit" onClick={switchToTable}>
            <TableChartIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
