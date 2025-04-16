import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.links}>
        <Link to="#" style={styles.link}>
          About Us
        </Link>
        <Link to="#" style={styles.link}>
          Contact Us
        </Link>
        <Link to="#" style={styles.link}>
          Help
        </Link>
        <Link to="#" style={styles.link}>
          Terms & Conditions
        </Link>
        <Link to="#" style={styles.link}>
          Privacy Policy
        </Link>
      </div>
      <p style={styles.copyright}>© 2023 Beauty Shop. All rights reserved.</p>
    </div>
  );
};

// Styles
const styles = {
  footer: {
    backgroundColor: '#A029C2',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 20px',
  },
  links: {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
  },
  copyright: {
    fontSize: '12px',
    color: '#bbb',
  },
};

export default Footer;