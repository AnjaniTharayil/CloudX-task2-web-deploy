import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button,Image } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();

  return (
    <div style={styles.header}>
      {/* App Logo / Name */}
      <div style={{ display: 'flex', alignItems: 'center',flexDirection:"row" }}>
      <Image
        src="https://img.icons8.com/?size=100&id=d6FK84G0ewdm&format=png&color=000000" 
        alt="Logo"
        style={{ width: '50px', height: '50px', marginRight: '10px' }}
      />
      <Link to="/" style={styles.logo}>
        <h1 style={styles.title}>Beauty Shop</h1>
      </Link>
      </div>
    

      {/* Cart Option */}
      <Link to="/cart">
        <Button type="default" style={styles.cartButton}>
          <ShoppingCartOutlined />
          <Badge count={cart.reduce((total, item) => total + item.quantity, 0)} showZero style={styles.badge} />
          <span style={styles.cartText}>Cart</span>
        </Button>
      </Link>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#A029C2',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    textDecoration: 'none',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#fff',
    margin: 0,
  },
  cartButton: {
    display: 'flex',
    alignItems: 'center',
  },
  badge: {
    marginLeft: 5,
  },
  cartText: {
    marginLeft: 10,
  },
};

export default Header;