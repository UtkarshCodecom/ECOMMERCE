import { Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles';
const Honey = ({ product, onAddToCart }) => {
    const classes = useStyles();
    return (
        <Typography className={classes.center}>{product.name}</Typography>
    )
}

export default Honey
