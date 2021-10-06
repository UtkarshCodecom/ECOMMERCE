import React from 'react'
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from './styles';


const Signup = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.center}>
           center is working properly
        </Typography>
    )
}

export default Signup
