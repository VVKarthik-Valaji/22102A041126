import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Stock App</h1>
      <nav style={styles.nav}>
        <Link style={styles.link} to="/profile">Profile</Link>
        <Link style={styles.link} to="/stocks">Stocks</Link>
      </nav>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    fontSize: '3rem',
    marginBottom: '30px',
    color: '#1976d2',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    fontSize: '1.25rem',
  },
  link: {
    color: '#1976d2',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderBottom: '2px solid transparent',
    paddingBottom: '5px',
    transition: 'border-color 0.3s',
  },
};
