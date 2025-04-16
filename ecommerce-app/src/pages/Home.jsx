import React from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Row, Col } from 'antd';
import ProductCard from '../components/ProductCard';

const ProductListPage = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Our Products</h2>
      <Row gutter={[20, 20]}>
        {products.map((product) => (
          <Col xs={24} sm={12} lg={8} key={product.id}>
            <ProductCard product={product} onAddToCart={() => addToCart(product)} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductListPage;