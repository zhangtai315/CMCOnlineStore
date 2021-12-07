import Header from "./components/Header";
import "./App.css";
import "./bootstrap.min.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url = "https://localhost:8888/api/Product";
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, [url]);

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, key: product.id, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <ProductList products={products} onAdd={onAdd} />
        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default App;
