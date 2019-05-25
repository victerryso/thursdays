import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    margin: 'auto',
    maxWidth: '480px',
    width: '100%',
  },
});

function Navigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('dashboard');

  function handleChange(event, newValue) {
    props.onChange(newValue)
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Dashboard" value="dashboard" icon={<DashboardIcon />} />
      <BottomNavigationAction label="Table" value="table" icon={<TableChartIcon />} />
      <BottomNavigationAction label="Map" value="map" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}

export default Navigation;
