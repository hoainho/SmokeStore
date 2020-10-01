import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/home/navbar';
import Shop from './components/shop/index';
import Home from './components/home/index';
import Collection from './components/home/Collection/Collection';
import {Cart} from './components/shop/cart';
import {CartProvider} from './components/reducer/CartContext';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <CartProvider >
                <Cart/>
                <Shop />
              </CartProvider>
            </Route>
            <Route path="/collection">
              <Collection/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
