import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';


import Styles from './Cards.module.css';

const Cards = (props) => {
  //  const {} = props.data.data[0];
 

    if (!props) {
        return 'Loading...'
    }

    let obj = props.data;
   
    return(
        <div className={Styles.content}>
        <Grid container spacing={3} justifyContent='center'>
          <Grid item component={Card} xs={12} md={3} className={cx(Styles.card, Styles.infected)}>
            <CardContent>
                <Typography color='textSecondary' gutterBottom>name</Typography>
                <Typography variant='h5'> <CountUp start = {0} end = {Object.keys(obj).length} duration={2.5} separator = ','/> </Typography>
                <Typography color='textSecondary'>DATE</Typography>
                <Typography variant='body2'>Number of cases</Typography>
            </CardContent>
          </Grid>

          <Grid item component={Card} xs={12} md={3} className={cx(Styles.card, Styles.recovered)}>
            <CardContent>
                <Typography color='textSecondary' gutterBottom>Infected</Typography>
                <Typography variant='h5'>DATA</Typography>
                <Typography color='textSecondary'>DATE</Typography>
                <Typography variant='body2'>Number of recoveries</Typography>
            </CardContent>
          </Grid>

          <Grid item component={Card} xs={12} md={3} className={cx(Styles.card, Styles.deaths)}>
            <CardContent>
                <Typography color='textSecondary' gutterBottom>Infected</Typography>
                <Typography variant='h5'>DATA</Typography>
                <Typography color='textSecondary'>DATE</Typography>
                <Typography variant='body2'>Number of deaths</Typography>
            </CardContent>
          </Grid>
        </Grid>

        </div>
    )
}

export default Cards