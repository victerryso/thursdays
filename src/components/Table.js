import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  header: {
    textTransform: 'capitalize',
  }
}));

const headers = [
  {
    header: 'date',
    hideOnSmall: true,
  },
  {
    header: 'name',
    hideOnSmall: false,
  },
  {
    header: 'cuisine',
    hideOnSmall: true,
  },
  {
    header: 'address',
    hideOnSmall: true,
  },
  {
    header: 'suburb',
    hideOnSmall: false,
  },
  {
    header: 'rating',
    hideOnSmall: false,
  }
]

function SimpleTable({ restaurants }) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Table>

        <TableHead>
          <TableRow>
            {headers.map(({ header, hideOnSmall }, index) => (
              <Hidden key={index} smDown={hideOnSmall}>
                <TableCell className={classes.header}>{header}</TableCell>
              </Hidden>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {restaurants.map((restaurant, index) => (
            <TableRow key={index}>
              {headers.map(({ header, hideOnSmall }, index) => (
                <Hidden key={index} smDown={hideOnSmall}>
                  <TableCell key={index}>
                    {restaurant[header]}
                  </TableCell>
                </Hidden>
              ))}
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </Container>
  );
}

export default SimpleTable;
