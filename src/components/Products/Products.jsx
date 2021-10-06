import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";
import { Link } from 'react-router-dom'; 

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={1}>
        {products.map((product) => (
          <Grid key={product.id} item xs={6} sm={3} md={2} lg={2}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
    <br></br><br></br><br></br><br></br>
    </>
  );
};

export default Products;
