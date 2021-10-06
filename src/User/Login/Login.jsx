import React from 'react'
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from '../Signup/styles';
const Login = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.center}>
           center is working properly
        </Typography>
    )
}

export default Login
