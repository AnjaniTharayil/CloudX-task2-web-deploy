import React from 'react';
import { Drawer, List, Button } from 'antd';
import { useCart } from '../context/CartContext';

const CartDrawer = ({ visible, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <Drawer title="Your Cart" placement="right" onClose={onClose} visible={visible}>
      <List
        dataSource={cart}
        renderItem={(item) => (
          <List.Item>
            <div>
              {item.name} - ${item.price}
              <Button type="link" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </div>
          </List.Item>
        )}
      />

      <div style={{ marginTop: 20 }}>
        <Button onClick={clearCart} style={{ marginRight: 10 }}>
          Clear Cart
        </Button>
        <Button type="primary" block>
          Checkout
        </Button>
      </div>
    </Drawer>
  );
};

export default CartDrawer;