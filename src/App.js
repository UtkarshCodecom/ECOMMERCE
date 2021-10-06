import React, { useState, useEffect } from "react";

import Products from "./components/Products/Products";
import { commerce } from "./lib/commerce";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./User/Login/Login";
import Signup from "./User/Signup/Signup";
import Downbar from "./components/Downbar/Downbar";
import Allroducts from "./components/Allproducts/Allproducts";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  console.log(products);
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
        <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/all">
            <Allroducts products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleEmptyCart={handleEmptyCart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleUpdateCartQty={handleUpdateCartQty}
            />
          </Route>
        </Switch>
        <Downbar />
      </div>
    </Router>
  );
};

export default App;