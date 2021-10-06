import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Allproduct";
import useStyles from "./styles";
import { Link } from 'react-router-dom'; 

const Allproducts = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={3} md={2} lg={4}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
    <br></br><br></br>
  </>
  );
};

export default Allproducts;
