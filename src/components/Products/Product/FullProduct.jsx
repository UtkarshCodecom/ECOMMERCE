import React from 'react'
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from './styles';

const FullProduct = () => {
    const classes = useStyles();
    return (
        <>
        <Typography className={classes.center}>
           center is working properly
        </Typography>
        <Typography className={classes.center}>
           center is working properly
        </Typography>
        <Typography className={classes.center}>
           center is working properly
        </Typography>
        <Typography className={classes.center}>
           center is working properly
        </Typography>
        <Typography className={classes.center}>
           center is working properly
        </Typography>

        </>

    )
}

export default FullProduct
