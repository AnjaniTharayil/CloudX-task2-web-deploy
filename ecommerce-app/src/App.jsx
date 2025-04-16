import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductListPage from './pages/Home';
import CartPage from './pages/Cart';

const { Content } = Layout;

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          {/* Fixed Header */}
          <Layout.Header style={styles.header}>
            <Header />
          </Layout.Header>

          {/* Content Section */}
          <Content style={styles.content}>
            <Routes>
              <Route path="/" element={<ProductListPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </Content>

          {/* Footer */}
          <Layout.Footer style={styles.footer}>
            <Footer />
          </Layout.Footer>
        </Layout>
      </Router>
    </CartProvider>
  );
};

// --- Styles ---
const styles = {
  header: {
    position: 'fixed', // Make the header fixed
    top: 0,
    width: '100%',
    zIndex: 1000, // Ensure it stays on top of other elements
    backgroundColor: '#ffffff', // Background color
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Add shadow for better visual distinction
    padding: 0,
  },
  content: {
    marginTop: '64px', // Offset content from the fixed header (default Ant Design height: 64px)
    padding: '20px',
    backgroundColor: '#E7DDFF',
    minHeight: 'calc(100vh - 64px - 70px)', // Adjust height accounting for header and footer height
  },
  footer: {
    textAlign: 'center',
    backgroundColor: '#A029C2',
    color: '#fff',
    padding: '20px',
  },
};

export default App;