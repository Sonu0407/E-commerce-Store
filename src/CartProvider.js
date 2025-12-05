// src/context/CartProvider.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product (or increase qty if exists)
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);

      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      // Ensure price becomes a NUMBER (Fixing your error)
      const priceValue = Number(
        String(product.price).replace(/[^0-9.]/g, "")
      );

      const normalized = {
        ...product,
        qty: 1,
        price: priceValue,
      };

      return [...prev, normalized];
    });
  };

  // Remove item completely
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0) // remove if qty becomes 0
    );
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => setCart([]);

  // Total amount
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
