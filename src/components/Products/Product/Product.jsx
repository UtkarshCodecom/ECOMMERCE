import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./styles";
const Product = ({ product, onAddToCart}) => {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.media.source}
          title={product.name}
          component={Link} to={"/" + product.name}
        />
        <CardActions className={classes.cardActions}>
            <IconButton
              aria-label="Add to cart"
              onClick={() => onAddToCart(product.id, 1)}
            >
              <AddShoppingCart />
            </IconButton>
          </CardActions>
          
        
        <CardContent className={classes.title} title={product.name}  onClick={() => (window.location.assign("/" + product.name))}>
          <div className={classes.cardContent}>
            <Typography variant="h6" gutterBottom>
              {product.name}
            </Typography>
            <Typography className={classes.productPrice} variant="h9">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
        </CardContent>
      </Card>
  );
};

export default Product;
