import React from 'react';
import { useCart } from '../context/CartContext';
import { List, Button, Divider } from 'antd';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Go back to the <a href="/">products page</a> to add items!</p>
      ) : (
        <>
          <List
            dataSource={cart}
            renderItem={(item) => (
              <List.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <strong>{item.name}</strong> (${item.price}) x {item.quantity}
                </div>
                <Button type="link" onClick={() => removeFromCart(item.id)} danger>
                  Remove
                </Button>
              </List.Item>
            )}
          />
          <Divider />
          <Button type="danger" onClick={clearCart} style={{ marginRight: '10px' }}>
            Clear Cart
          </Button>
          <Button type="primary">Checkout</Button>
        </>
      )}
    </div>
  );
};

export default CartPage;