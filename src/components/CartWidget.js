import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Icono de carrito

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart color="white" size="1.5rem" />
      <span className="badge bg-secondary">0</span> {/* Puedes reemplazar "0" con la cantidad real */}
    </div>
  );
};

export default CartWidget;
