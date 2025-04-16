import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'antd';

const ProductCard = ({ product, onAddToCart }) => {
  const [itemCount, setItemCount] = useState(0); // Maintain individual product count

  // Handle Add to Cart Click
  const handleAddToCart = () => {
    setItemCount(itemCount + 1); // Increment the count
    onAddToCart(product); // Call the parent onAddToCart passed as a prop
  };

  return (
    <Card
      hoverable
      cover={
        <div style={{ width: '200px', height: '200px', overflow: 'hidden', margin: '0 auto' }}>
          <img
            alt={product.name}
            src={product.image}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      }
      style={{
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        <strong>${product.price}</strong>
      </p>
      {/* Item Count & Add to Cart Button Row */}
      <Row justify="space-between" align="middle">
        {/* Count Section */}
        <Col>
          <div style={styles.countContainer}>
            <span style={styles.countLabel}>Items Added:</span>
            <span style={styles.countValue}>{itemCount}</span>
          </div>
        </Col>
        {/* Add to Cart Button */}
        <Col>
          <Button type="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

// --- Styles ---
const styles = {
  countContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  countLabel: {
    fontSize: '14px',
    color: '#555',
    fontWeight: 'bold',
  },
  countValue: {
    fontSize: '16px',
    color: '#000',
    fontWeight: 'bold',
  },
};

export default ProductCard;